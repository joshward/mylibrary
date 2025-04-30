"use client";

interface SearchInputProps {
  value?: string;
  onSearch?: (term: string) => void;
}

export default function SearchInput({ value, onSearch }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Enter Search Term"
      className="border-slate-300 border rounded p-2 focus:border-slate-900 outline-0"
      onChange={(e) => {
        onSearch?.(e.target.value);
      }}
    />
  );
}
