import { FC } from "react";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blue text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-xs font-semibold text-black"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              {columns.map((col) => (
                <td key={col.key} className="border-t px-4 py-2 text-sm">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
