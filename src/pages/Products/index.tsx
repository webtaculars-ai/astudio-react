import useFetchData from "../../hooks/useFetchData";
import FilterDropdown from "../../components/FilterDropdown";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const Products = () => {
  const {
    data: products,
    pageSize,
    currentPage,
    totalPages,
    setPageSize,
    setCurrentPage,
  } = useFetchData({ endpoint: "products" });

  const columns = [
    { key: "title", label: "TITLE" },
    { key: "brand", label: "BRAND" },
    { key: "category", label: "CATEGORY" },
    { key: "price", label: "PRICE" },
    { key: "stock", label: "STOCK" },
    { key: "rating", label: "RATING" },
  ];

  return (
    <div className="p-4">
      <FilterDropdown
        options={[5, 10, 20, 50]}
        value={pageSize}
        onChange={setPageSize}
      />
      <Table columns={columns} data={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
