<<<<<<< HEAD
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";
=======
"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
>>>>>>> e0dc322c62330917ba1f03f5464ccd9992454974

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
<<<<<<< HEAD
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        }
      }
      {...props} />
=======
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
>>>>>>> e0dc322c62330917ba1f03f5464ccd9992454974
  );
}

export { Toaster }
