"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils.ts"

interface ContextMenuProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root> {}

const ContextMenu = ({ ...props }: ContextMenuProps) => (
  <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
);
ContextMenu.displayName = ContextMenuPrimitive.Root.displayName;

interface ContextMenuTriggerProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger> {}

const ContextMenuTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Trigger>,
  ContextMenuTriggerProps
>(({ ...props }, ref) => (
  <ContextMenuPrimitive.Trigger ref={ref} data-slot="context-menu-trigger" {...props} />
));
ContextMenuTrigger.displayName = ContextMenuPrimitive.Trigger.displayName;

interface ContextMenuGroupProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group> {}

const ContextMenuGroup = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Group>,
  ContextMenuGroupProps
>(({ ...props }, ref) => (
  <ContextMenuPrimitive.Group ref={ref} data-slot="context-menu-group" {...props} />
));
ContextMenuGroup.displayName = ContextMenuPrimitive.Group.displayName;

interface ContextMenuPortalProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal> {}

const ContextMenuPortal = ({ ...props }: ContextMenuPortalProps) => (
  <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
);
ContextMenuPortal.displayName = ContextMenuPrimitive.Portal.displayName;

interface ContextMenuSubProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Sub> {}

const ContextMenuSub = ({ ...props }: ContextMenuSubProps) => (
  <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
);
ContextMenuSub.displayName = ContextMenuPrimitive.Sub.displayName;

interface ContextMenuRadioGroupProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup> {}

const ContextMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioGroup>,
  ContextMenuRadioGroupProps
>(({ ...props }, ref) => (
  <ContextMenuPrimitive.RadioGroup ref={ref} data-slot="context-menu-radio-group" {...props} />
));
ContextMenuRadioGroup.displayName = ContextMenuPrimitive.RadioGroup.displayName;

interface ContextMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    data-slot="context-menu-sub-trigger"
    data-inset={inset}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

interface ContextMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {}

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    data-slot="context-menu-sub-content"
    className={cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[var(--radix-context-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-lg",
      className
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {}

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      data-slot="context-menu-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-[var(--radix-context-menu-content-available-height)] min-w-[8rem] origin-[var(--radix-context-menu-content-transform-origin)] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

interface ContextMenuItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, variant = "default", ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    data-slot="context-menu-item"
    data-inset={inset}
    data-variant={variant}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

interface ContextMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {}

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    data-slot="context-menu-checkbox-item"
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    checked={checked}
    {...props}
  >
    <span
      className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
    >
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

interface ContextMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {}

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    data-slot="context-menu-radio-item"
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <span
      className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
    >
      <ContextMenuPrimitive.ItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

interface ContextMenuLabelProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    data-slot="context-menu-label"
    data-inset={inset}
    className={cn(
      "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

interface ContextMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {}

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    data-slot="context-menu-separator"
    className={cn("bg-border -mx-1 my-1 h-px", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

interface ContextMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const ContextMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  ContextMenuShortcutProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="context-menu-shortcut"
    className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
    {...props}
  />
));
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
