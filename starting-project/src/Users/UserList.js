import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
import design from "./UserTable.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <table className={design.customers}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {props.users.map((users) => (
          // <li key={users.id}>
          <tr key={users.id}>
            <td> {users.name}</td>
            <td> {users.age} Years old</td>
          </tr>
          // </li>
        ))}
      </table>
    </Card>
  );
};
export default UserList;
