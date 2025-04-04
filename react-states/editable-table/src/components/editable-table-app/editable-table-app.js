import "./editable-table-app.css";
import usersData from "../../data/table-data.json";
import { useState } from "react";
import { EditableTable } from "../table/table";

export function EditableTableApp() {
  const [users, setUsers] = useState(usersData);

  /* Remove sample code and start project */

  return (
    <div id="editable-table-app">
      <EditableTable users={users} />
    </div>
  );
}
