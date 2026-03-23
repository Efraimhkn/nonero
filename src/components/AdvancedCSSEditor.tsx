import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import type { HydraTheme } from '../types/theme';

export function AdvancedCSSEditor({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  const [draft, setDraft] = useState(theme.advancedCss);

  useEffect(() => {
    setDraft(theme.advancedCss);
  }, [theme.advancedCss]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (draft !== theme.advancedCss) {
        onChange({ ...theme, advancedCss: draft });
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [draft, onChange, theme]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-white/70">Adicione seletores extras, overrides e animações. O conteúdo será injetado ao final do CSS gerado.</p>
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <CodeMirror
          value={draft}
          height="320px"
          theme={oneDark}
          extensions={[css()]}
          onChange={(value) => setDraft(value)}
          basicSetup={{ lineNumbers: true, autocompletion: true, highlightActiveLine: true }}
        />
      </div>
    </div>
  );
}
