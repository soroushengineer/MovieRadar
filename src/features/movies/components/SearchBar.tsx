import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search for movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
