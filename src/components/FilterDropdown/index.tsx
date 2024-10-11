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
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="bg-yellow-500 text-black rounded p-2"
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
