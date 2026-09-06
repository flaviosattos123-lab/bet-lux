import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"

export const ToastProvider = ToastPrimitives.Provider

export const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport ref={ref} className={className} {...props} />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

export const Toast = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Root ref={ref} className={className} {...props} />
))
Toast.displayName = ToastPrimitives.Root.displayName

export const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close ref={ref} className={className} {...props} />
))
ToastClose.displayName = ToastPrimitives.Close.displayName

export const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={className} {...props} />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName
