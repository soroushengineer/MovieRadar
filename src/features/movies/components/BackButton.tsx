import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: "#222",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        border: "1px solid #333",
        color: "#fff",
        marginBottom: "1rem"
      }}
    >
      ← Back
    </button>
  );
}
