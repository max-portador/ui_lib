import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { buildSelector } from '@/shared/lib/store';
import type { JsonSettings } from '@/entities/User/model/types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    createSelector(
        getUserAuthData,
        (data) => data?.jsonSettings ?? defaultJsonSettings,
    ),
);
