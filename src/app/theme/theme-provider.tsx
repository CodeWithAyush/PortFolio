"use client"
import React from "react";

import { ThemeProvider } from "next-themes";

interface ProviderIProps {
  children: any;
}

const Provider = ({ children }: ProviderIProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
