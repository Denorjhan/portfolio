"use client";

import { useTheme } from "next-themes";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function FlickeringGridWrapper() {
  const { resolvedTheme } = useTheme();
  const maxOpacity = resolvedTheme === "dark" ? 0.3 : 0.5;

  return (
    <FlickeringGrid
      className="h-full w-full"
      squareSize={2}
      gridGap={2}
      maxOpacity={maxOpacity}
      style={{
        maskImage: "linear-gradient(to bottom, black, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
      }}
    />
  );
}
