import type { ChangeEvent } from 'react';
import type { HydraTheme } from '../types/theme';
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch } from './ui/primitives';

export function BackgroundSection({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  const loadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange({ ...theme, background: { ...theme.background, imageUrl: String(reader.result ?? '') } });
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>URL da imagem ou GIF</Label>
        <Input value={theme.background.imageUrl} onChange={(event) => onChange({ ...theme, background: { ...theme.background, imageUrl: event.target.value } })} placeholder="https://.../wallpaper.gif" />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" className="bg-white/10 text-white" onClick={() => document.getElementById('bg-upload')?.click()}>Carregar do computador</Button>
        <input id="bg-upload" type="file" accept="image/*,image/gif" className="hidden" onChange={loadFile} />
        <Button type="button" className="bg-rose-500/80" onClick={() => onChange({ ...theme, background: { ...theme.background, imageUrl: '' } })}>Limpar fundo</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label>Aplicar em qual área</Label><Select value={theme.background.area} onValueChange={(value) => onChange({ ...theme, background: { ...theme.background, area: value as HydraTheme['background']['area'] } })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">Nenhum</SelectItem><SelectItem value="header">Header</SelectItem><SelectItem value="sidebar">Sidebar</SelectItem><SelectItem value="content">Content</SelectItem><SelectItem value="all">Todo o launcher</SelectItem></SelectContent></Select></div>
        <div><Label>Background-size</Label><Select value={theme.background.size} onValueChange={(value) => onChange({ ...theme, background: { ...theme.background, size: value as HydraTheme['background']['size'] } })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="cover">cover</SelectItem><SelectItem value="contain">contain</SelectItem><SelectItem value="auto">auto</SelectItem></SelectContent></Select></div>
        <div><Label>Position</Label><Select value={theme.background.position} onValueChange={(value) => onChange({ ...theme, background: { ...theme.background, position: value as HydraTheme['background']['position'] } })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="center">center</SelectItem><SelectItem value="top">top</SelectItem><SelectItem value="bottom">bottom</SelectItem><SelectItem value="left">left</SelectItem><SelectItem value="right">right</SelectItem></SelectContent></Select></div>
        <div><Label>Repeat</Label><Select value={theme.background.repeat} onValueChange={(value) => onChange({ ...theme, background: { ...theme.background, repeat: value as HydraTheme['background']['repeat'] } })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="no-repeat">no-repeat</SelectItem><SelectItem value="repeat">repeat</SelectItem><SelectItem value="repeat-x">repeat-x</SelectItem><SelectItem value="repeat-y">repeat-y</SelectItem></SelectContent></Select></div>
      </div>
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-4">
        <div>
          <p className="font-semibold">Manter animação do GIF</p>
          <p className="text-sm text-white/60">Permite preservar GIF/base64 sem reprocessamento.</p>
        </div>
        <Switch checked={theme.background.preserveAnimation} onCheckedChange={(checked) => onChange({ ...theme, background: { ...theme.background, preserveAnimation: checked } })} />
      </div>
    </div>
  );
}
