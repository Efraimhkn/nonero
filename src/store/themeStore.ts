import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { baseTheme, presets } from '../lib/hydraClasses';
import type { HydraTheme } from '../types/theme';

interface ThemeState {
  theme: HydraTheme;
  setTheme: (theme: HydraTheme) => void;
  patchTheme: (updater: (theme: HydraTheme) => HydraTheme) => void;
  applyPreset: (presetId: string) => void;
  resetTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: baseTheme,
      setTheme: (theme) => set({ theme }),
      patchTheme: (updater) => set((state) => ({ theme: updater(state.theme) })),
      applyPreset: (presetId) => {
        const preset = presets.find((item) => item.id === presetId);
        if (preset) {
          set({ theme: preset.theme });
        }
      },
      resetTheme: () => set({ theme: baseTheme }),
    }),
    {
      name: 'hydra-theme-studio',
    },
  ),
);
