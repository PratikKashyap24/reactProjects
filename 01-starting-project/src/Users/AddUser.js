import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const userNamehandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const agehandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const AddUserhandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      //alert("Praa");
      setError({
        title: "Invalid Input",
        message: "Please enter a valid input name and age(non empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    console.log(enteredUserName, enteredAge);
    const UserData = {
      userName: enteredUserName,
      Age: enteredAge,
    };
    console.log(UserData);
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNamehandler}
          />

          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={agehandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
