import * as React from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { EyeClosed } from "lucide-react";

interface DarkModeSwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Switch>, "checked" | "onCheckedChange"> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
}

export function DarkModeSwitch({
  checked,
  onCheckedChange,
  label = "Makeup",
  className,
  ...props
}: DarkModeSwitchProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm afacad-flux",
        className,
      )}
    >
      <span className="flex items-center gap-1">
        {label} <EyeClosed size={16}/>
      </span>
      <Switch checked={checked} onCheckedChange={onCheckedChange} {...props} />
    </div>
  );
}
