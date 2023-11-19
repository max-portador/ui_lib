import popupCls from './popup.module.scss';

import { DropDownDirection } from '@/shared/types/ui';

export const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': popupCls.optionsBottomLeft,
    'bottom right': popupCls.optionsBottomRight,
    'top left': popupCls.optionsTopLeft,
    'top right': popupCls.optionsTopRight,
};
