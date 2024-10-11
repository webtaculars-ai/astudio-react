import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/tables";

const Users = () => {
  const [users, setUsers] = useState([]);
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
      <Table columns={columns} data={users} />
    </div>
  );
};

export default Users;
