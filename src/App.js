import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subtract, addValueWithDelay } from "./redux/counter/action";
/**
 * The main App component. It displays the current counter value and provides buttons to manipulate the counter.
 * It uses Redux to manage state and dispatch actions.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
    try {
        const counterValue = useSelector((state) => state.counter.counterValue);
        const asyncCounterObject = useSelector((state) => state.counter);
        const dispatch = useDispatch();

        return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <h2>{counterValue}</h2>
                <h2>{asyncCounterObject.error}</h2>
                <h2>{!asyncCounterObject.loading ? "Idle" : "Loading"}</h2>
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
                        dispatch(subtract());
                    }}
                >
                    Subtract
                </button>
                <button
                    onClick={() => {
                        dispatch(addValueWithDelay(25));
                    }}
                >
                    Delayed Call
                </button>
            </div>
        );
    } catch (error) {
        console.log('App Error: ' + error)
        throw error;
    }
}