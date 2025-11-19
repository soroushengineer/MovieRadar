import "./SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-poster"></div>
      <div className="skeleton-line short"></div>
      <div className="skeleton-line"></div>
    </div>
  );
}
