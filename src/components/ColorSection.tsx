import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, Label, Slider } from './ui/primitives';
import type { HydraTheme } from '../types/theme';

const colorFields = [
  ['primary', 'Cor Primária', 'Botões e destaques principais.'],
  ['background', 'Fundo Base', 'Plano de fundo geral do launcher.'],
  ['header', 'Header', 'Barra superior do Hydra.'],
  ['sidebar', 'Sidebar', 'Painel lateral de navegação.'],
  ['content', 'Content', 'Área central com jogos e coleções.'],
  ['bottom', 'Bottom Panel', 'Barra inferior com ações rápidas.'],
  ['text', 'Texto', 'Cor principal dos textos.'],
  ['textOnButton', 'Texto no Botão', 'Cor dos labels nos botões primários.'],
] as const;

const opacityFields = [
  ['header', 'Opacidade do Header'],
  ['sidebar', 'Opacidade da Sidebar'],
  ['content', 'Opacidade do Content'],
  ['bottom', 'Opacidade do Bottom Panel'],
] as const;

export function ColorSection({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {colorFields.map(([key, label, tooltip]) => (
          <div key={key} className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <Label className="flex items-center gap-2">{label}<Tooltip><TooltipTrigger asChild><button type="button"><Info className="h-4 w-4 opacity-70" /></button></TooltipTrigger><TooltipContent>{tooltip}</TooltipContent></Tooltip></Label>
            <div className="flex items-center gap-3">
              <input type="color" value={theme.colors[key]} onChange={(event) => onChange({ ...theme, colors: { ...theme.colors, [key]: event.target.value } })} className="h-12 w-16 rounded-xl border border-white/10 bg-transparent" />
              <span className="rounded-xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em]">{theme.colors[key]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {opacityFields.map(([key, label]) => (
          <div key={key} className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <Label>{label} <span className="text-xs text-white/60">({Math.round(theme.opacity[key] * 100)}%)</span></Label>
            <Slider min={0.1} max={1} step={0.01} value={[theme.opacity[key]]} onValueChange={([value]) => onChange({ ...theme, opacity: { ...theme.opacity, [key]: value } })} />
          </div>
        ))}
      </div>
    </div>
  );
}
