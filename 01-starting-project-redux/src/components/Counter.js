import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
// import { HiOutlineDocumentDownload } from "react-icons/hi";
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementCounterhandler = () => {
    dispatch(counterActions.increment());
    //dispatch({ type: "increment" });
  };
  const decrementCounterhandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const incrementCounterhandlerBy10 = () => {
    // dispatch({ type: "incrementBy10", amount: 10 });
    dispatch(counterActions.increase(10));
  };
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  console.log(show, "kkk");
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

      <div>
        <button onClick={incrementCounterhandler}>Increment Counter</button>
        <button onClick={incrementCounterhandlerBy10}>
          Increment Counter By 10
        </button>
        <button onClick={decrementCounterhandler}>Decrement Counter</button>
      </div>
    </main>
  );
};

export default Counter;
