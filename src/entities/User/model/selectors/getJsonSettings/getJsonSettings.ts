import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '../getUserAuthData/getUserAuthData';
import { buildSelector } from '@/shared/lib/store';
import type { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    createSelector(
        getUserAuthData,
        (data) => data?.jsonSettings ?? defaultJsonSettings,
    ),
);
