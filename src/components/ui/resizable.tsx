import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils.ts"

interface ResizablePanelGroupProps extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup> {}

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  ResizablePanelGroupProps
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    data-slot="resizable-panel-group"
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = "ResizablePanelGroup";

interface ResizablePanelProps extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel> {}

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  ResizablePanelProps
>(({ ...props }, ref) => (
  <ResizablePrimitive.Panel ref={ref} data-slot="resizable-panel" {...props} />
));
ResizablePanel.displayName = "ResizablePanel";

interface ResizableHandleProps extends React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  ResizableHandleProps
>(({ withHandle, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    data-slot="resizable-handle"
    className={cn(
      "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div
        className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border"
      >
        <GripVerticalIcon className="size-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = "ResizableHandle";

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
