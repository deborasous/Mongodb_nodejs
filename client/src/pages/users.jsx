import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <table>
        <thead>
          <tr className="grid grid-cols-2 gap-1 ">
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 gap-2">
          {users.map((user) => (
            <tr
              key={user._id}
              className="flex gap-6 border-2 border-slate-300 rounded-md px-4"
            >
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
