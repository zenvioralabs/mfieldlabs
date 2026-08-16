"use client";

import * as React from "react";

const APP_READY_EVENT = "mfield:app-ready";

export function markAppReady() {
  window.dispatchEvent(new Event(APP_READY_EVENT));
}

export function useAppReady() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener(APP_READY_EVENT, onReady);
    return () => window.removeEventListener(APP_READY_EVENT, onReady);
  }, []);

  return ready;
}
