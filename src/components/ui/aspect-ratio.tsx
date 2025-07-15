import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import * as React from "react"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ ...props }, ref) => (
  <AspectRatioPrimitive.Root ref={ref} data-slot="aspect-ratio" {...props} />
));
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio }
