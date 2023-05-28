import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  const userData = (uname, uage) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
