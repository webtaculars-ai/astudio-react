import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import FilterDropdown from "../../components/FilterDropdown";
import Table from "../../components/Tables";

const Users = () => {
  const { users, setUsers } = useContext(AppContext)!;
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users?limit=${pageSize}`).then((res) => {
      setUsers(res.data.users);
    });
  }, [pageSize, setUsers]);

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
    </div>
  );
};

export default Users;
