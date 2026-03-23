import { useMemo, type CSSProperties } from 'react';
import { buildThemeCss } from '../lib/hydraClasses';
import { hexToRgba } from '../lib/utils';
import { useThemeStore } from '../store/themeStore';

export function useThemeGenerator() {
  const { theme, setTheme, patchTheme, applyPreset, resetTheme } = useThemeStore();

  const previewStyle = useMemo(() => {
    const backgroundImage = theme.background.imageUrl ? `url(${theme.background.imageUrl})` : undefined;

    return {
      '--hydra-primary': theme.colors.primary,
      '--hydra-background': theme.colors.background,
      '--hydra-header': hexToRgba(theme.colors.header, theme.opacity.header),
      '--hydra-sidebar': hexToRgba(theme.colors.sidebar, theme.opacity.sidebar),
      '--hydra-content': hexToRgba(theme.colors.content, theme.opacity.content),
      '--hydra-bottom': hexToRgba(theme.colors.bottom, theme.opacity.bottom),
      '--hydra-text': theme.colors.text,
      '--hydra-text-on-button': theme.colors.textOnButton,
      '--hydra-radius': `${theme.effects.radius}px`,
      '--hydra-shadow': `0 14px 40px ${hexToRgba(theme.effects.shadowColor, theme.effects.shadowIntensity)}`,
      '--hydra-blur': `blur(${theme.effects.blur}px)`,
      '--hydra-font': `"${theme.typography.fontFamily}", sans-serif`,
      '--hydra-font-size': `${theme.typography.baseSize}px`,
      '--hydra-font-weight': String(theme.typography.fontWeight),
      '--hydra-line-height': String(theme.typography.lineHeight),
      '--hydra-wallpaper': backgroundImage ?? 'none',
      '--hydra-bg-size': theme.background.size,
      '--hydra-bg-position': theme.background.position,
      '--hydra-bg-repeat': theme.background.repeat,
    } as CSSProperties;
  }, [theme]);

  const cssOutput = useMemo(() => buildThemeCss(theme), [theme]);

  return {
    theme,
    setTheme,
    patchTheme,
    applyPreset,
    resetTheme,
    previewStyle,
    cssOutput,
  };
}
