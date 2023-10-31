import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
/**
 * A functional component representing the main App.
 * It uses Redux hooks to dispatch actions and select state from the Redux store.
 * It renders a series of buttons for different counter actions and displays the current counter value, loading state, and any errors.
 */
export default function App() {
  // Selects the current counter value from the Redux store.
  const numval = useSelector((state) => state.counter.counterValue);

  // Selects the entire counter object from the Redux store.
  const AsynObj = useSelector((state) => state.counter);

  // Provides a reference to the dispatch function from the Redux store.
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{numval}</h2>
      <h2>{AsynObj.error}</h2>
      <h2>{!AsynObj.loading ? "Idle" : "Loading"}</h2>
      <button
        onClick={() => {
          dispatch(addTen());
        }}
      >
        Add Ten
      </button>
      <button
        onClick={() => {
          dispatch(addTen(30));
        }}
      >
        Add Custom
      </button>
      <button
        onClick={() => {
          dispatch(subs());
        }}
      >
        sub
      </button>
      <button
        onClick={() => {
          dispatch(TimeAddVal(25));
        }}
      >
        Delay Call
      </button>
    </div>
  );
}