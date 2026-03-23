import { Copy, Download, FileJson2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { ControlsPanel } from './components/ControlsPanel';
import { PresetButtons } from './components/PresetButtons';
import { PreviewLauncher } from './components/PreviewLauncher';
import { ThemeHeader } from './components/ThemeHeader';
import { Button, Card, Textarea, TooltipProvider } from './components/ui/primitives';
import { useThemeGenerator } from './hooks/useThemeGenerator';

function App() {
  const { theme, setTheme, applyPreset, resetTheme, previewStyle, cssOutput } = useThemeGenerator();

  const copyCss = async () => {
    await navigator.clipboard.writeText(cssOutput);
    toast.success('CSS copiado com sucesso.');
  };

  const downloadCss = () => {
    const blob = new Blob([cssOutput], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'theme.css';
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Arquivo theme.css baixado.');
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(theme, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hydra-theme-backup.json';
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Backup JSON exportado.');
  };

  return (
    <TooltipProvider>
      <div className={theme.meta.interfaceMode === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-slate-100 text-slate-950 transition-colors dark:bg-[#020617] dark:text-slate-50">
          <Toaster position="top-right" toastOptions={{ style: { background: '#0f172a', color: '#fff', borderRadius: '18px' } }} />
          <main className="mx-auto flex max-w-[1600px] flex-col gap-6 p-4 md:p-6 xl:p-8">
            <ThemeHeader theme={theme} onChange={setTheme} onReset={() => { resetTheme(); toast('Tema resetado para o padrão.'); }} />
            <PresetButtons onApply={(presetId) => { applyPreset(presetId); toast.success('Preset aplicado instantaneamente.'); }} />
            <div className="grid gap-6 xl:grid-cols-[480px_1fr]">
              <ControlsPanel theme={theme} onChange={setTheme} />
              <PreviewLauncher theme={theme} style={previewStyle} />
            </div>
            <Card className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">CSS final para o Hydra Launcher</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Copie, baixe ou exporte como JSON para backup.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="button" className="h-14 px-6 text-base" onClick={copyCss}><Copy className="h-5 w-5" /> COPIAR CSS</Button>
                  <Button type="button" className="h-14 bg-emerald-500 px-6 text-base text-white" onClick={downloadCss}><Download className="h-5 w-5" /> Baixar tema.css</Button>
                  <Button type="button" className="h-14 bg-white/10 px-6 text-base text-current" onClick={exportJson}><FileJson2 className="h-5 w-5" /> Exportar JSON</Button>
                </div>
              </div>
              <Textarea value={cssOutput} readOnly className="min-h-[360px] font-mono text-xs leading-6" />
            </Card>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
