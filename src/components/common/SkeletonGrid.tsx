import SkeletonCard from "./SkeletonCard";
import "./SkeletonGrid.css";

interface SkeletonGridProps {
  count?: number;
}

export default function SkeletonGrid({ count = 6 }: SkeletonGridProps) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
