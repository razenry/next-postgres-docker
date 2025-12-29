import { LoadingSpinner } from "@/components/loading-spinner";

export function PageLoading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="large" />
        <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
      </div>
    </div>
  );
}

export function SectionLoading() {
  return (
    <div className="flex min-h-100 items-center justify-center">
      <LoadingSpinner size="default" />
    </div>
  );
}

export function CardLoading() {
  return (
    <div className="space-y-4">
      <div className="h-48 w-full animate-pulse rounded-lg bg-muted" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export function TableLoading({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-12 w-full animate-pulse rounded-lg bg-muted"
        />
      ))}
    </div>
  );
}
