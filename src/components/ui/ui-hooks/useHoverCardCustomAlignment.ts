import { useMediaQuery } from "@raddix/use-media-query";
import config from "../../../../tailwind.config";

type AlignType = "center" | "end" | "start";
type SideType = "right" | "top" | "bottom" | "left";
type BreakpointType = keyof typeof config.theme.screens;

type useHoverCardCustomAlginmentArgs = {
  isCustomAlignment: boolean;
  defaultAlign: AlignType;
  defaultSide?: SideType;
  customAlign?: AlignType;
  customSide?: SideType;
  breakpoint?: BreakpointType;
};

export const useHoverCardCustomAlignment = ({
  isCustomAlignment,
  defaultAlign,
  defaultSide,
  customAlign = "end",
  customSide = "right",
  breakpoint = "lg",
}: useHoverCardCustomAlginmentArgs) => {
  const breakpointValue = config.theme.screens[breakpoint];

  const breakpointModificator = useMediaQuery(
    `(min-width: ${breakpointValue})`,
  );

  const alignPosition =
    isCustomAlignment && breakpointModificator ? customAlign : defaultAlign;
  const sidePosition =
    isCustomAlignment && breakpointModificator ? customSide : defaultSide;

  return { alignPosition, sidePosition };
};
