import "./editable-table-app.css";
import usersData from "./data/table-data.json";
import { useState } from "react";

export function EditableTableApp() {
  const [users, setUsers] = useState(usersData);

  /* Remove sample code and start project */

  return (
    <div id="editable-table-app">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email} — {user.role} — {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
