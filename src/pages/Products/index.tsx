import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import FilterDropdown from "../../components/FilterDropdown";
import Table from "../../components/Tables";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=${pageSize}`)
      .then((res) => {
        setProducts(res.data.products);
      });
  }, [pageSize, setProducts]);

  const columns = ["title", "brand", "category", "price"];

  return (
    <div className="p-4">
      <FilterDropdown
        options={[5, 10, 20, 50]}
        value={pageSize}
        onChange={setPageSize}
      />
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Products;
