export type BackgroundArea = 'none' | 'header' | 'sidebar' | 'content' | 'all';
export type BackgroundSize = 'cover' | 'contain' | 'auto';
export type BackgroundPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
export type BackgroundRepeat = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';

export interface ThemeColors {
  primary: string;
  background: string;
  header: string;
  sidebar: string;
  content: string;
  bottom: string;
  text: string;
  textOnButton: string;
}

export interface ThemeOpacities {
  header: number;
  sidebar: number;
  content: number;
  bottom: number;
}

export interface ThemeTypography {
  fontFamily: string;
  baseSize: number;
  fontWeight: number;
  lineHeight: number;
}

export interface ThemeEffects {
  radius: number;
  shadowIntensity: number;
  shadowColor: string;
  blur: number;
}

export interface ThemeBackground {
  imageUrl: string;
  area: BackgroundArea;
  size: BackgroundSize;
  position: BackgroundPosition;
  repeat: BackgroundRepeat;
  preserveAnimation: boolean;
}

export interface ThemeMeta {
  themeName: string;
  author: string;
  interfaceMode: 'light' | 'dark';
}

export interface HydraTheme {
  meta: ThemeMeta;
  colors: ThemeColors;
  opacity: ThemeOpacities;
  typography: ThemeTypography;
  effects: ThemeEffects;
  background: ThemeBackground;
  advancedCss: string;
}

export interface ThemePreset {
  id: string;
  label: string;
  description: string;
  theme: HydraTheme;
}
