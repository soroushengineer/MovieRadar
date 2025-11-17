import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>ID: {id}</p>
    </div>
  );
}
