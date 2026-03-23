import { Sparkles } from 'lucide-react';
import { presets } from '../lib/hydraClasses';
import { Button, Card } from './ui/primitives';

export function PresetButtons({ onApply }: { onApply: (presetId: string) => void }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300" /><h2 className="text-lg font-semibold">Presets instantâneos</h2></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {presets.map((preset) => (
          <button key={preset.id} onClick={() => onApply(preset.id)} className="rounded-2xl border border-white/10 bg-black/10 p-4 text-left transition hover:border-cyan-400/50 hover:bg-white/5">
            <div className="mb-2 flex items-center justify-between"><span className="font-semibold">{preset.label}</span><span className="text-xs uppercase text-cyan-300">preset</span></div>
            <p className="text-sm text-white/60">{preset.description}</p>
          </button>
        ))}
      </div>
      <Button type="button" className="w-full bg-white/10 text-white">Escolha um preset para preencher tudo instantaneamente</Button>
    </Card>
  );
}
