interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  className,
}: SearchBarProps) {
  return (
    <div className={className}>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}
