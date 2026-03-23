# Hydra Theme Studio

Hydra Theme Studio é um editor visual avançado para criação de temas do Hydra Launcher com preview em tempo real, presets, exportação de CSS/JSON e editor CSS avançado.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3.4+
- Radix UI + Tailwind (estilo shadcn/ui)
- lucide-react
- CodeMirror 6
- react-hot-toast
- Zustand + localStorage

## Recursos

- Preview inspirado no Hydra Launcher com atualização em tempo real
- Painel por abas para cores, tipografia, bordas, fundo especial e CSS avançado
- 10 presets profissionais
- Exportação de CSS pronto para Hydra
- Download de `theme.css`
- Exportação de backup em JSON
- Persistência automática no localStorage
- Toggle light/dark da interface do editor
- Responsivo para desktop e mobile

## Como usar

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite no navegador.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no Vercel

1. Envie o projeto para um repositório no GitHub.
2. Importe o repositório no Vercel.
3. Use as configurações padrão:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Publique.

## Deploy no GitHub Pages

1. Faça build localmente com `npm run build`.
2. Publique o conteúdo de `dist/` usando GitHub Actions ou `gh-pages`.
3. Como o `base` do Vite está configurado para `./`, o build funciona em subpastas estáticas.

## Estrutura

```text
src/
├── components/
├── hooks/
├── lib/
├── store/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

## Exportação para Hydra Launcher

O painel inferior gera um CSS com cabeçalho profissional e variáveis CSS inspiradas nas classes do Hydra Launcher. Basta copiar ou baixar o arquivo `theme.css` e ajustar conforme necessário no Hydra.
