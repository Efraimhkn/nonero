import type { HydraTheme } from '../types/theme';
import { Label, Slider } from './ui/primitives';

export function BorderShadowSection({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label>Border radius global ({theme.effects.radius}px)</Label><Slider min={0} max={40} step={1} value={[theme.effects.radius]} onValueChange={([value]) => onChange({ ...theme, effects: { ...theme.effects, radius: value } })} /></div>
        <div><Label>Intensidade da sombra ({Math.round(theme.effects.shadowIntensity * 100)}%)</Label><Slider min={0} max={0.8} step={0.01} value={[theme.effects.shadowIntensity]} onValueChange={([value]) => onChange({ ...theme, effects: { ...theme.effects, shadowIntensity: value } })} /></div>
        <div><Label>Cor da sombra</Label><div className="flex items-center gap-3"><input type="color" value={theme.effects.shadowColor} onChange={(event) => onChange({ ...theme, effects: { ...theme.effects, shadowColor: event.target.value } })} className="h-12 w-16 rounded-xl border border-white/10 bg-transparent" /><span className="rounded-xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em]">{theme.effects.shadowColor}</span></div></div>
        <div><Label>Blur / glassmorphism ({theme.effects.blur}px)</Label><Slider min={0} max={32} step={1} value={[theme.effects.blur]} onValueChange={([value]) => onChange({ ...theme, effects: { ...theme.effects, blur: value } })} /></div>
      </div>
    </div>
  );
}
