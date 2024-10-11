import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, 2, "...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
      >
        &lt;
      </button>
      {getPageNumbers().map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === "number" && onPageChange(number)}
          className={`px-3 py-1 rounded-full ${
            number === currentPage
              ? "bg-yellow-500 text-black"
              : number === "..."
              ? "bg-white text-gray-600 cursor-default"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          disabled={number === "..."}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
