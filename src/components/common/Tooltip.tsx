import { OverlayTrigger, Tooltip as BTooltip } from "react-bootstrap";
import React from "react";
import { Placement } from "react-bootstrap/types";

interface TooltipProps {
  children: any;
  tooltip: any;
  placement: Placement;
}
const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltip,
  placement = "bottom",
}) => {
  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={<BTooltip id={placement}>{tooltip}</BTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;
