import type { UserConfig, ThemeOptions, DefaultTheme, LocaleConfig } from 'vitepress';
import { I18Arr } from '../constants';

export type I18Locales = (LocaleConfig<DefaultTheme.Config>)[string];

export type I18Key = keyof typeof I18Arr;
