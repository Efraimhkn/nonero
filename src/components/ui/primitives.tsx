import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 backdrop-blur-xl', className)} {...props} />
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn('h-11 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-foreground outline-none transition focus:border-cyan-400/60', className)} {...props} />
));
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn('w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground outline-none transition focus:border-cyan-400/60', className)} {...props} />
));
Textarea.displayName = 'Textarea';

export const Button = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cn('inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60', className)} {...props} />
);

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn('mb-2 block text-sm font-semibold text-foreground', className)} {...props} />
);

export const Tabs = TabsPrimitive.Root;
export const TabsList = ({ className, ...props }: TabsPrimitive.TabsListProps) => <TabsPrimitive.List className={cn('grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-2 md:grid-cols-5', className)} {...props} />;
export const TabsTrigger = ({ className, ...props }: TabsPrimitive.TabsTriggerProps) => <TabsPrimitive.Trigger className={cn('rounded-xl px-3 py-2 text-xs font-semibold text-muted-foreground transition data-[state=active]:bg-white/10 data-[state=active]:text-white', className)} {...props} />;
export const TabsContent = ({ className, ...props }: TabsPrimitive.TabsContentProps) => <TabsPrimitive.Content className={cn('mt-4 outline-none', className)} {...props} />;

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderPrimitive.SliderProps>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn('relative flex h-6 w-full touch-none select-none items-center', className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 grow overflow-hidden rounded-full bg-white/10">
      <SliderPrimitive.Range className="absolute h-full bg-cyan-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-cyan-300 bg-white shadow" />
  </SliderPrimitive.Root>
));
Slider.displayName = 'Slider';

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectPrimitive.SelectTriggerProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn('flex h-11 w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 text-sm', className)} {...props}>
    {children}
    <SelectPrimitive.Icon><ChevronDown className="h-4 w-4 opacity-70" /></SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';
export const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, SelectPrimitive.SelectContentProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} className={cn('z-50 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-white shadow-2xl', className)} {...props}>
      <SelectPrimitive.Viewport className="p-2">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = 'SelectContent';
export const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectPrimitive.SelectItemProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn('relative flex cursor-pointer select-none items-center rounded-xl py-2 pl-8 pr-3 text-sm outline-none focus:bg-white/10', className)} {...props}>
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center"><SelectPrimitive.ItemIndicator><Check className="h-4 w-4" /></SelectPrimitive.ItemIndicator></span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchPrimitive.SwitchProps>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root ref={ref} className={cn('peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-white/20 transition data-[state=checked]:bg-cyan-400', className)} {...props}>
    <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 translate-x-0.5 rounded-full bg-white transition data-[state=checked]:translate-x-5" />
  </SwitchPrimitive.Root>
));
Switch.displayName = 'Switch';

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipPrimitive.TooltipContentProps>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content ref={ref} sideOffset={6} className={cn('z-50 max-w-xs rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-xs text-white shadow-xl', className)} {...props} />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = 'TooltipContent';
