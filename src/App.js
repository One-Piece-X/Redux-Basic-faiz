import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a given message to the console and writes it to a file.
 * 
 * @param {string} message - The message to be logged.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
/**
 * Represents the main App component of the application.
 * It connects to the Redux store to get the state and dispatch actions.
 * It also handles any errors that occur during the rendering and dispatching process.
 * 
 * @returns {JSX.Element} A React component representing the main App.
 */
export default function App() {
  try {
    const numval = useSelector((state) => state.counter.counterValue);
    const AsynObj = useSelector((state) => state.counter);
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
  } catch (error) {
    logToFile('App Error: ' + error)
    throw error;
  }
}