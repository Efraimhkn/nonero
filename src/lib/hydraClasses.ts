import type { HydraTheme, ThemePreset } from '../types/theme';
import { hexToRgba } from './utils';

export const fontOptions = [
  'Inter', 'Poppins', 'Roboto', 'Montserrat', 'Open Sans', 'Lato', 'Nunito', 'Raleway', 'Oswald', 'Ubuntu', 'Fira Sans', 'Work Sans', 'DM Sans', 'Merriweather', 'JetBrains Mono',
];

export const baseTheme: HydraTheme = {
  meta: {
    themeName: 'Hydra Theme Studio',
    author: 'Seu nickname',
    interfaceMode: 'dark',
  },
  colors: {
    primary: '#6d28d9',
    background: '#09090f',
    header: '#0f172a',
    sidebar: '#111827',
    content: '#111827',
    bottom: '#0f172a',
    text: '#f8fafc',
    textOnButton: '#f8fafc',
  },
  opacity: {
    header: 0.92,
    sidebar: 0.9,
    content: 0.82,
    bottom: 0.92,
  },
  typography: {
    fontFamily: 'Inter',
    baseSize: 15,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  effects: {
    radius: 18,
    shadowIntensity: 0.38,
    shadowColor: '#38bdf8',
    blur: 18,
  },
  background: {
    imageUrl: '',
    area: 'all',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
    preserveAnimation: true,
  },
  advancedCss: '',
};

const cloneTheme = (overrides: Partial<HydraTheme>): HydraTheme => ({
  ...baseTheme,
  ...overrides,
  meta: { ...baseTheme.meta, ...overrides.meta },
  colors: { ...baseTheme.colors, ...overrides.colors },
  opacity: { ...baseTheme.opacity, ...overrides.opacity },
  typography: { ...baseTheme.typography, ...overrides.typography },
  effects: { ...baseTheme.effects, ...overrides.effects },
  background: { ...baseTheme.background, ...overrides.background },
});

export const presets: ThemePreset[] = [
  { id: 'neon', label: 'Neon', description: 'Brilho vibrante azul e roxo.', theme: cloneTheme({ meta: { themeName: 'Neon Pulse' }, colors: { primary: '#22d3ee', header: '#0f172a', sidebar: '#020617', content: '#0b1120' }, effects: { shadowColor: '#22d3ee', shadowIntensity: 0.55, blur: 20 } }) },
  { id: 'glass', label: 'Glass', description: 'Visual translúcido moderno.', theme: cloneTheme({ meta: { themeName: 'Glass Aurora' }, opacity: { header: 0.62, sidebar: 0.5, content: 0.42, bottom: 0.58 }, effects: { blur: 26, radius: 24 }, colors: { primary: '#8b5cf6', background: '#020617' } }) },
  { id: 'dracula', label: 'Dracula', description: 'Roxo escuro com contraste alto.', theme: cloneTheme({ meta: { themeName: 'Dracula Hydra' }, colors: { primary: '#bd93f9', background: '#282a36', header: '#44475a', sidebar: '#2d3140', content: '#1e2029', bottom: '#44475a', text: '#f8f8f2', textOnButton: '#282a36' }, effects: { shadowColor: '#bd93f9' } }) },
  { id: 'sakura', label: 'Sakura', description: 'Paleta rosa suave.', theme: cloneTheme({ meta: { themeName: 'Sakura Bloom', interfaceMode: 'light' }, colors: { primary: '#ec4899', background: '#fff1f2', header: '#ffe4e6', sidebar: '#fecdd3', content: '#fff1f2', bottom: '#ffe4e6', text: '#4c0519', textOnButton: '#fff1f2' }, opacity: { header: 0.95, sidebar: 0.82, content: 0.78, bottom: 0.92 }, effects: { shadowColor: '#fb7185' } }) },
  { id: 'retro', label: 'Retro', description: 'Estilo arcade synthwave.', theme: cloneTheme({ meta: { themeName: 'Retro Drive' }, colors: { primary: '#f59e0b', background: '#12051f', header: '#240046', sidebar: '#3c096c', content: '#10002b', bottom: '#240046' }, effects: { shadowColor: '#f59e0b', shadowIntensity: 0.48 } }) },
  { id: 'minimal', label: 'Minimal', description: 'Limpo, discreto e elegante.', theme: cloneTheme({ meta: { themeName: 'Minimal Slate' }, colors: { primary: '#64748b', background: '#e2e8f0', header: '#ffffff', sidebar: '#f8fafc', content: '#ffffff', bottom: '#ffffff', text: '#0f172a', textOnButton: '#ffffff' }, opacity: { header: 0.98, sidebar: 0.96, content: 0.94, bottom: 0.98 }, effects: { shadowColor: '#94a3b8', shadowIntensity: 0.14, blur: 8 }, typography: { fontWeight: 400 }, meta: { interfaceMode: 'light' } }) },
  { id: 'cyberpunk', label: 'Cyberpunk', description: 'Amarelo, ciano e contraste intenso.', theme: cloneTheme({ meta: { themeName: 'Cyberpunk Nexus' }, colors: { primary: '#facc15', background: '#09090b', header: '#111827', sidebar: '#0f172a', content: '#111827', bottom: '#111827', text: '#e0f2fe', textOnButton: '#111827' }, effects: { shadowColor: '#facc15', shadowIntensity: 0.58 } }) },
  { id: 'pastel', label: 'Pastel', description: 'Leve e delicado.', theme: cloneTheme({ meta: { themeName: 'Pastel Dream', interfaceMode: 'light' }, colors: { primary: '#a78bfa', background: '#f8fafc', header: '#eef2ff', sidebar: '#f5f3ff', content: '#ffffff', bottom: '#ede9fe', text: '#312e81', textOnButton: '#ffffff' }, effects: { shadowColor: '#c4b5fd', shadowIntensity: 0.2 }, opacity: { header: 0.95, sidebar: 0.92, content: 0.9, bottom: 0.95 } }) },
  { id: 'dark-default', label: 'Dark Default', description: 'Base escura equilibrada.', theme: cloneTheme({ meta: { themeName: 'Dark Default' } }) },
  { id: 'light-mode', label: 'Light Mode', description: 'Versão clara pronta.', theme: cloneTheme({ meta: { themeName: 'Light Mode', interfaceMode: 'light' }, colors: { primary: '#2563eb', background: '#eff6ff', header: '#ffffff', sidebar: '#dbeafe', content: '#ffffff', bottom: '#ffffff', text: '#0f172a', textOnButton: '#ffffff' }, opacity: { header: 0.97, sidebar: 0.9, content: 0.94, bottom: 0.97 }, effects: { shadowColor: '#60a5fa', shadowIntensity: 0.18, blur: 10 } }) },
];

export const buildThemeCss = (theme: HydraTheme) => {
  const date = new Date().toLocaleDateString('pt-BR');
  const backgroundCss = theme.background.imageUrl
    ? `url("${theme.background.imageUrl}")`
    : 'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(2,6,23,0.96))';

  const targetSelector = {
    none: '',
    header: '.header',
    sidebar: '.sidebar',
    content: '.container__content',
    all: '.launcher-shell',
  }[theme.background.area];

  const backgroundBlock = targetSelector
    ? `${targetSelector} {\n  background-image: ${backgroundCss};\n  background-size: ${theme.background.size};\n  background-position: ${theme.background.position};\n  background-repeat: ${theme.background.repeat};\n}`
    : '';

  return `/*\n  Tema: ${theme.meta.themeName}\n  Autor: ${theme.meta.author}\n  Criado com Hydra Theme Studio\n  Data: ${date}\n  https://docs.hydralauncher.gg/themes.html\n*/\n\n:root {\n  --hydra-primary: ${theme.colors.primary};\n  --hydra-background: ${theme.colors.background};\n  --hydra-header: ${hexToRgba(theme.colors.header, theme.opacity.header)};\n  --hydra-sidebar: ${hexToRgba(theme.colors.sidebar, theme.opacity.sidebar)};\n  --hydra-content: ${hexToRgba(theme.colors.content, theme.opacity.content)};\n  --hydra-bottom: ${hexToRgba(theme.colors.bottom, theme.opacity.bottom)};\n  --hydra-text: ${theme.colors.text};\n  --hydra-text-on-button: ${theme.colors.textOnButton};\n  --hydra-radius: ${theme.effects.radius}px;\n  --hydra-shadow: 0 12px 40px ${hexToRgba(theme.effects.shadowColor, theme.effects.shadowIntensity)};\n  --hydra-blur: blur(${theme.effects.blur}px);\n  --hydra-font: "${theme.typography.fontFamily}", sans-serif;\n  --hydra-font-size: ${theme.typography.baseSize}px;\n  --hydra-font-weight: ${theme.typography.fontWeight};\n  --hydra-line-height: ${theme.typography.lineHeight};\n}\n\n.launcher-shell, .header, .sidebar, .container__content, .bottom-panel, .button, .toast {\n  font-family: var(--hydra-font);\n  font-size: var(--hydra-font-size);\n  font-weight: var(--hydra-font-weight);\n  line-height: var(--hydra-line-height);\n}\n\n.launcher-shell {\n  color: var(--hydra-text);\n  background: var(--hydra-background);\n}\n\n.header { background-color: var(--hydra-header); backdrop-filter: var(--hydra-blur); }\n.sidebar { background-color: var(--hydra-sidebar); backdrop-filter: var(--hydra-blur); }\n.container__content { background-color: var(--hydra-content); backdrop-filter: var(--hydra-blur); }\n.bottom-panel { background-color: var(--hydra-bottom); backdrop-filter: var(--hydra-blur); }\n.button { background: var(--hydra-primary); color: var(--hydra-text-on-button); border-radius: var(--hydra-radius); box-shadow: var(--hydra-shadow); }\n.toast { border-radius: calc(var(--hydra-radius) - 4px); box-shadow: var(--hydra-shadow); }\n\n${backgroundBlock}\n\n${theme.advancedCss}`;
};
