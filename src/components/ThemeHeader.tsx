import { MoonStar, SunMedium } from 'lucide-react';
import type { HydraTheme } from '../types/theme';
import { Button, Card, Input, Label, Switch } from './ui/primitives';

export function ThemeHeader({ theme, onChange, onReset }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void; onReset: () => void }) {
  return (
    <Card className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="grid flex-1 gap-4 md:grid-cols-2">
        <div>
          <Label>Nome do Tema</Label>
          <Input value={theme.meta.themeName} onChange={(event) => onChange({ ...theme, meta: { ...theme.meta, themeName: event.target.value } })} placeholder="Ex.: Cyber Hydra" />
        </div>
        <div>
          <Label>Seu Nickname</Label>
          <Input value={theme.meta.author} onChange={(event) => onChange({ ...theme, meta: { ...theme.meta, author: event.target.value } })} placeholder="Ex.: @seunick" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
          <SunMedium className="h-4 w-4" />
          <Switch checked={theme.meta.interfaceMode === 'dark'} onCheckedChange={(checked) => onChange({ ...theme, meta: { ...theme.meta, interfaceMode: checked ? 'dark' : 'light' } })} />
          <MoonStar className="h-4 w-4" />
        </div>
        <Button type="button" className="bg-white/10 text-white" onClick={onReset}>Resetar tema</Button>
      </div>
    </Card>
  );
}
