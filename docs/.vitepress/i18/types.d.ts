import type { UserConfig, ThemeOptions, DefaultTheme } from 'vitepress';
import { I18Arr } from '../constants';

export type I18Locales = UserConfig<DefaultTheme.Config>['locales'][string];

export type I18Key = keyof typeof I18Arr;
