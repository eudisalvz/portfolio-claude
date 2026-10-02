"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Renders the build-time year during prerender/hydration, then the visitor's current year.
export default function CurrentYear({ fallback }: { fallback: number }) {
  return useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => fallback);
}
