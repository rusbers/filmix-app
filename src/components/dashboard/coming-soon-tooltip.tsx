import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ComingSoonTooltipProps = {
  children: React.ReactNode;
  tooltipMessage?: string;
};

export function ComingSoonTooltip({
  children,
  tooltipMessage = "Coming Soon!",
}: ComingSoonTooltipProps) {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger
          className="cursor-pointer disabled:pointer-events-auto"
          asChild
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
