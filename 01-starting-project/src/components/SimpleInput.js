// import { useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  // const [enteredName, setEnteredName] = useState("");
  // const [eneteredAge, setEnteredAge] = useState(0);
  // //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [eneteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [eneteredAgeTouched, setEnteredAgeTouched] = useState(false);
  // const [isFormValid, setIsFormIsValid] = useState(false);
  // const enteredNameRef = useRef();

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredAgeIsValid = eneteredAge > 0;

  // useEffect(() => {
  //   if (enteredNameIsValid && enteredAgeIsValid) {
  //     setIsFormIsValid(true);
  //   } else {
  //     setIsFormIsValid(false);
  //   }
  // }, [enteredNameIsValid, enteredAgeIsValid]);

  // const updateNameHandler = (event) => {
  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  //   setEnteredName(event.target.value);
  // };
  // const updateAgeHandler = (event) => {
  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  //   setEnteredAge(event.target.value);
  // };
  // const updateFocusHandler = (event) => {
  //   console.log("Blureed");
  //   setEnteredNameTouched(true);
  //   // if (event.target.value.trim() === "") {
  //   //   console.log("eneterd Blur Error");
  //   //   setEnteredNameIsValid(false);
  //   // }
  //   setEnteredName(event.target.value);
  // };
  // const updateFocusHandlerAge = (event) => {
  //   console.log("Blureed");
  //   setEnteredAgeTouched(true);
  //   // if (event.target.value.trim() === "") {
  //   //   console.log("eneterd Blur Error");
  //   //   setEnteredNameIsValid(false);
  //   // }
  //   setEnteredAge(event.target.value);
  // };

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Eneterd Effect");
  //   }
  // }, [enteredNameIsValid]);
  const formSubmissionHandler = (event) => {
    console.log("submit");

    // setEnteredNameTouched(true);
    // setEnteredAgeTouched(true);
    // if (enteredName.trim() === "") {
    //   // console.log("eneterd");
    //   // setEnteredNameIsValid(false);
    //   return;
    // }
    if (isValid) {
      return;
    }
    //setEnteredNameIsValid(true);
    console.log(value);
    reset();
    //const eneteredValue = enteredNameRef.current.value; //Calls after the submit
    // console.log(eneteredValue);
    // console.log(eneteredAge);
    // setEnteredName("");
    // setEnteredAge(0);
    // setEnteredNameTouched(false);
    // setEnteredAgeTouched(false);
    // enteredNameRef.current.value = ""; // Not Ideal as we are manipulating the dom directly instead of letting react do it
  };
  // const nameInputIsInValid = !enteredNameIsValid && eneteredNameTouched;
  // const ageInputIsValid = !enteredAgeIsValid && eneteredAgeTouched;
  const inputClasses = hasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          value={value}
          //ref={enteredNameRef}
        />
        {true && <p className="error-text">Please Enter a valid Name{value}</p>}
        {/* <label htmlFor="name">Age</label>
        <input
          type="number"
          id="age"
          onChange={updateAgeHandler}
          onBlur={updateFocusHandlerAge}
          value={eneteredAge}
        />
        {ageInputIsValid && (
          <p className="error-text">Please Enter a valid Age</p>
        )} */}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
