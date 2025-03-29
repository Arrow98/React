import "./editable-table-app.css";

export function EditableTableApp({ users }) {
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
