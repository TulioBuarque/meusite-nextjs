"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof ThemeProviderImpl>) {
  return <ThemeProviderImpl {...props}>{children}</ThemeProviderImpl>
}

const ThemeProviderImpl = useTheme().Provider
