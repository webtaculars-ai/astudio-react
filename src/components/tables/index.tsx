import { FC } from "react";

interface TableProps {
  columns: string[];
  data: any[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table-auto w-full text-left border-collapse">
      <thead className="bg-blue-500">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="even:bg-grey odd:bg-white">
            {columns.map((col) => (
              <td key={col} className="border px-4 py-2">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
