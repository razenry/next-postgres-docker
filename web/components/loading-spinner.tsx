export function LoadingSpinner({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    default: "h-8 w-8",
    large: "h-12 w-12",
  }

  return <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted border-t-primary`} />
}

export function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
    </div>
  )
}

export function LoadingPulse() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:0.2s]" />
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:0.4s]" />
    </div>
  )
}
