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
    { key: "firstName", label: "FIRST NAME" },
    { key: "lastName", label: "LAST NAME" },
    { key: "maidenName", label: "MAIDEN NAME" },
    { key: "age", label: "AGE" },
    { key: "gender", label: "GENDER" },
    { key: "email", label: "EMAIL" },
    { key: "username", label: "USERNAME" },
    { key: "bloodGroup", label: "BLOODGROUP" },
    { key: "eyeColor", label: "EYECOLOR" },
  ];

  return (
    <div>
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">
          <span className="text-gray-500">Home</span> /{" "}
          <span className="text-yellow-500">Users</span>
        </h1>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <FilterDropdown
            options={[5, 10, 20, 50]}
            value={pageSize}
            onChange={setPageSize}
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 py-1 border rounded"
            />
            <svg
              className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <Table columns={columns} data={users} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Users;
