import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";
import { ToasterProps as SonnerToasterProps } from "sonner";
import * as React from "react";

interface ToasterProps extends SonnerToasterProps {}

const Toaster = React.forwardRef<HTMLOListElement, ToasterProps>((
  { ...props }, ref
) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      ref={ref}
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        } as React.CSSProperties
      }
      {...props}
    />
  );
});
Toaster.displayName = "Toaster";

export { Toaster }
