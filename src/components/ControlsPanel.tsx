import type { HydraTheme } from '../types/theme';
import { AdvancedCSSEditor } from './AdvancedCSSEditor';
import { BackgroundSection } from './BackgroundSection';
import { BorderShadowSection } from './BorderShadowSection';
import { ColorSection } from './ColorSection';
import { TypographySection } from './TypographySection';
import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from './ui/primitives';

export function ControlsPanel({ theme, onChange }: { theme: HydraTheme; onChange: (theme: HydraTheme) => void }) {
  return (
    <Card className="h-full">
      <Tabs defaultValue="cores">
        <TabsList>
          <TabsTrigger value="cores">Cores</TabsTrigger>
          <TabsTrigger value="tipografia">Tipografia</TabsTrigger>
          <TabsTrigger value="efeitos">Bordas & Efeitos</TabsTrigger>
          <TabsTrigger value="fundo">Fundo Especial</TabsTrigger>
          <TabsTrigger value="css">CSS Avançado</TabsTrigger>
        </TabsList>
        <TabsContent value="cores"><ColorSection theme={theme} onChange={onChange} /></TabsContent>
        <TabsContent value="tipografia"><TypographySection theme={theme} onChange={onChange} /></TabsContent>
        <TabsContent value="efeitos"><BorderShadowSection theme={theme} onChange={onChange} /></TabsContent>
        <TabsContent value="fundo"><BackgroundSection theme={theme} onChange={onChange} /></TabsContent>
        <TabsContent value="css"><AdvancedCSSEditor theme={theme} onChange={onChange} /></TabsContent>
      </Tabs>
    </Card>
  );
}
