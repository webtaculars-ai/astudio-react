import { useState, useEffect } from "react";
import axios from "axios";

interface UseFetchDataProps {
  endpoint: string;
  initialPageSize?: number;
}

const useFetchData = ({ endpoint, initialPageSize = 5 }: UseFetchDataProps) => {
  const [data, setData] = useState<any[]>([]);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/${endpoint}?limit=${pageSize}&skip=${
          (currentPage - 1) * pageSize
        }`
      );
      setData(res.data[endpoint]);
      setTotalPages(Math.ceil(res.data.total / pageSize));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageSize, currentPage]);

  return {
    data,
    pageSize,
    currentPage,
    totalPages,
    setPageSize,
    setCurrentPage,
  };
};

export default useFetchData;
