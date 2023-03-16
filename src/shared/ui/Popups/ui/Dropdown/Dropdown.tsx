import React, { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '../../../../lib/classNames/classNames';
import { DropDownDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    items: DropDownItem[];

}

const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>
                {
                    trigger
                }
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item?.disabled}
                            type="button"
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            onClick={item?.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                disabled={item?.disabled}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item?.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});

export { Dropdown };
