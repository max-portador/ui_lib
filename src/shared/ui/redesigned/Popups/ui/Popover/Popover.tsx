import React, { memo, PropsWithChildren, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '../../../../../lib/classNames/classNames';
import { DropDownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps extends PropsWithChildren {
    className?: string;
    direction?: DropDownDirection;
    trigger: ReactNode;
}

const Popover = memo((props: PopoverProps) => {
    const { className, children, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});

export { Popover };
