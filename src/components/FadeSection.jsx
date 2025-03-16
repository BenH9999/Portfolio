import React from "react";
import { useIntersectionRatio } from "../hooks/useIntersectionRatio";

export const FadeSection = ({ children, style, ...rest }) => {
  const [ref, ratio] = useIntersectionRatio();

  return (
    <div
      ref={ref}
      className="transition-opacity duration-200 ease-out"
      style={{ opacity: ratio }}
      {...rest}
    >
      {children}
    </div>
  );
};