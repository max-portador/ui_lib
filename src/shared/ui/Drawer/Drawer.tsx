import React, {
    memo, PropsWithChildren, useCallback, useEffect,
} from 'react';
import type { Mods } from '@/shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import cls from './Drawer.module.scss';

interface DrawerProps extends PropsWithChildren {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const { a, config, useSpring } = Spring;
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const { isClosing } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, api, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
    }) => {
        if (my < -70) cancel();

        if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                close();
            } else {
                openDrawer();
            }
        } else {
            api.start({ y: my, immediate: true });
        }
    }, {
        from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    });

    // до открытия в первый раз не отрисовываем
    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px`, y }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
