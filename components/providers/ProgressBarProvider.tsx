"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#f5ca03" // primary color or a distinct brand color
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
