interface MoviePosterProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }
  
  export default function MoviePoster({
    src,
    alt,
    width = 200,
    height = 300
  }: MoviePosterProps) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          borderRadius: "8px",
          objectFit: "cover",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
        }}
      />
    );
  }
  