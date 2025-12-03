// src/ui/Loading/index.tsx (Tailwind-only version)
export const Loading = ({ size = "md", label }: { size?: "sm" | "md" | "lg"; label?: string } = {}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "h-4 w-4 rounded-full bg-[#537367]",
              size === "sm" && "h-3 w-3",
              size === "lg" && "h-6 w-6",
              "animate-bounce"
            )}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};