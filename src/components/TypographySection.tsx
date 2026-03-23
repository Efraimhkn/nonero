import type { HydraTheme } from '../types/theme';
import { fontOptions } from '../lib/hydraClasses';
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Slider } from './ui/primitives';

export function TypographySection({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <Label>Fonte principal</Label>
        <Select value={theme.typography.fontFamily} onValueChange={(value) => onChange({ ...theme, typography: { ...theme.typography, fontFamily: value } })}>
          <SelectTrigger><SelectValue placeholder="Selecione uma fonte" /></SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => <SelectItem key={font} value={font}>{font}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="mt-3 rounded-2xl border border-white/10 bg-black/10 p-4" style={{ fontFamily: theme.typography.fontFamily }}>
          Prévia: Hydra Theme Studio – personalize o launcher com estilo.
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div><Label>Tamanho base ({theme.typography.baseSize}px)</Label><Slider min={12} max={22} step={1} value={[theme.typography.baseSize]} onValueChange={([value]) => onChange({ ...theme, typography: { ...theme.typography, baseSize: value } })} /></div>
        <div><Label>Peso ({theme.typography.fontWeight})</Label><Slider min={300} max={800} step={100} value={[theme.typography.fontWeight]} onValueChange={([value]) => onChange({ ...theme, typography: { ...theme.typography, fontWeight: value } })} /></div>
        <div><Label>Line-height ({theme.typography.lineHeight.toFixed(2)})</Label><Slider min={1} max={2} step={0.05} value={[theme.typography.lineHeight]} onValueChange={([value]) => onChange({ ...theme, typography: { ...theme.typography, lineHeight: value } })} /></div>
      </div>
    </div>
  );
}
