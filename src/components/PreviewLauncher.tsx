import { motion } from 'framer-motion';
import { Bell, Download, Gamepad2, HardDriveDownload, Home, Search, Settings, Sparkles, Star } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { HydraTheme } from '../types/theme';

const games = [
  { title: 'Hades II', category: 'Roguelike', accent: 'from-fuchsia-500 to-violet-500' },
  { title: 'Cyber Shadow', category: 'Action', accent: 'from-cyan-500 to-blue-500' },
  { title: 'Stardew Valley', category: 'Cozy', accent: 'from-emerald-500 to-lime-500' },
  { title: 'Alan Wake 2', category: 'Horror', accent: 'from-orange-500 to-rose-500' },
];

export function PreviewLauncher({ theme, style }: { theme: HydraTheme; style: CSSProperties }) {
  const backgroundTarget = theme.background.area;
  const bgStyle = theme.background.imageUrl
    ? {
        backgroundImage: `linear-gradient(rgba(2,6,23,0.25), rgba(2,6,23,0.55)), url(${theme.background.imageUrl})`,
        backgroundSize: theme.background.size,
        backgroundPosition: theme.background.position,
        backgroundRepeat: theme.background.repeat,
      }
    : undefined;

  const pickBackground = (area: string) => backgroundTarget === area || backgroundTarget === 'all' ? bgStyle : undefined;

  return (
    <motion.div layout className="launcher-shell overflow-hidden rounded-[32px] border border-white/10 bg-[var(--hydra-background)] p-4 text-[var(--hydra-text)] shadow-2xl transition-all duration-200" style={style}>
      <div className="flex h-[720px] flex-col gap-4 lg:h-[780px]">
        <div className="header flex items-center justify-between rounded-[var(--hydra-radius)] px-5 py-4" style={pickBackground('header')}>
          <div className="flex items-center gap-3"><div className="rounded-2xl bg-[var(--hydra-primary)]/20 p-3"><Gamepad2 className="h-5 w-5 text-[var(--hydra-primary)]" /></div><div><p className="text-xs uppercase tracking-[0.35em] text-white/60">Hydra Launcher</p><h3 className="text-xl font-bold">{theme.meta.themeName}</h3></div></div>
          <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-2xl bg-black/20 px-4 py-2 md:flex"><Search className="h-4 w-4" /><span className="text-sm text-white/60">Pesquisar jogos</span></div><button className="button px-4 py-2">Instalar tema</button></div>
        </div>

        <div className="grid flex-1 gap-4 lg:grid-cols-[240px_1fr]">
          <div className="sidebar flex flex-col justify-between rounded-[var(--hydra-radius)] p-4" style={pickBackground('sidebar')}>
            <div className="space-y-3">
              {[
                [Home, 'Início'],
                [HardDriveDownload, 'Biblioteca'],
                [Star, 'Favoritos'],
                [Bell, 'Novidades'],
                [Settings, 'Configurações'],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10"><Icon className="h-4 w-4" /><span>{label}</span></div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Destaque</p>
              <p className="text-lg font-semibold">Visualização perfeita do Hydra</p>
              <p className="mt-2 text-sm text-white/60">Atualização em tempo real para validar glass, tipografia e cards.</p>
            </div>
          </div>

          <div className="container__content flex flex-col rounded-[var(--hydra-radius)] p-5" style={pickBackground('content')}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Coleção em destaque</p>
                <h2 className="text-2xl font-bold">Sua biblioteca com identidade própria</h2>
              </div>
              <div className="button flex items-center gap-2 px-4 py-2"><Download className="h-4 w-4" /> Atualizar</div>
            </div>
            <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {games.map((game, index) => (
                <motion.div key={game.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-[calc(var(--hydra-radius)-2px)] border border-white/10 bg-black/20 p-3 shadow-lg">
                  <div className={`mb-3 h-40 rounded-3xl bg-gradient-to-br ${game.accent}`} />
                  <div className="flex items-start justify-between gap-3"><div><h4 className="font-semibold">{game.title}</h4><p className="text-sm text-white/60">{game.category}</p></div><Sparkles className="h-4 w-4 text-[var(--hydra-primary)]" /></div>
                  <button className="button mt-4 w-full px-3 py-2">Jogar agora</button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bottom-panel flex flex-col gap-3 rounded-[var(--hydra-radius)] px-5 py-4 md:flex-row md:items-center md:justify-between" style={pickBackground('all')}>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Bottom Panel</p>
            <p className="text-sm text-white/80">Espaço ideal para ações rápidas, atalhos e status do launcher.</p>
          </div>
          <div className="flex gap-3">
            <button className="button px-4 py-2">Salvar</button>
            <button className="rounded-2xl border border-white/10 px-4 py-2">Compartilhar</button>
          </div>
        </div>

        <div className="toast fixed bottom-6 right-6 rounded-2xl bg-emerald-500/90 px-4 py-3 text-sm font-semibold text-white shadow-[var(--hydra-shadow)]">
          Tema renderizado em tempo real.
        </div>
      </div>
    </motion.div>
  );
}
