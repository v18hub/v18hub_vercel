// src/ui/Loading/index.tsx
export const Loading = ({ 
  size = "md", 
  label 
}: { size?: "sm" | "md" | "lg"; label?: string } = {}) => {
  const dotSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4";

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`rounded-full bg-[#537367] animate-bounce ${dotSize}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      {label && <p className="text-sm text-gray-600">{label}</p>}
    </div>
  );
};