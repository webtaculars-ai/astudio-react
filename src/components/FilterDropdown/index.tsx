import { FC } from "react";

interface FilterDropdownProps {
  options: number[];
  value: number;
  onChange: (val: number) => void;
}

const FilterDropdown: FC<FilterDropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">Entries</span>
      <select
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="bg-yellow text-black rounded p-2"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
