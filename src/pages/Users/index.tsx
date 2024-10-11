import useFetchData from "../../hooks/useFetchData";
import FilterDropdown from "../../components/FilterDropdown";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const Users = () => {
  const {
    data: users,
    pageSize,
    currentPage,
    totalPages,
    setPageSize,
    setCurrentPage,
  } = useFetchData({ endpoint: "users" });

  const columns = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "email",
    "username",
    "bloodGroup",
    "eyeColor",
  ];

  return (
    <div className="p-4">
      <FilterDropdown
        options={[5, 10, 20, 50]}
        value={pageSize}
        onChange={setPageSize}
      />
      <Table columns={columns} data={users} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Users;
