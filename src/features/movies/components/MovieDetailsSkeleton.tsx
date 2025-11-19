import "./MovieDetailsSkeleton.css";

export default function MovieDetailsSkeleton() {
  return (
    <div className="details-skeleton">
      <div className="skeleton-poster"></div>

      <div className="details-text">
        <div className="skeleton-line title"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>

        <div className="skeleton-line desc"></div>
        <div className="skeleton-line desc"></div>
      </div>
    </div>
  );
}

