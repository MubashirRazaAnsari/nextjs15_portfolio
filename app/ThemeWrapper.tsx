// ThemeWrapper.tsx

"use client";  // This ensures that this component runs only on the client

import { useEffect, useState } from "react";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  // Ensure that theme logic runs only on the client after the component is mounted
  useEffect(() => {
    setMounted(true);  // Set to true after the component has mounted
  }, []);

  // If the component is not yet mounted (SSR phase), return null to prevent hydration mismatch
  if (!mounted) return null;

  return <>{children}</>;
};

export default ThemeWrapper;
