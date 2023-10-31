import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a file.
 * 
 * @param {string} message - The message to be logged.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
/**
 * Creates an action to add ten to a counter.
 *
 * @export
 * @function
 * @name addTen
 * @param {number} val - The current value of the counter.
 * @returns {Object} An action object with a type of "counter/addten" and the current value as payload.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action of type "counter/subs".
 * 
 * @function subs
 * @returns {Object} An action object with type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous thunk action creator that adds a value to the counter after a delay.
 * 
 * This action creator uses the `createAsyncThunk` function from Redux Toolkit to handle the asynchronous logic.
 * It dispatches a pending action immediately, then dispatches a fulfilled or rejected action once the promise resolves or rejects.
 * 
 * @param {string} "counter/time-add-val" - The action type prefix for this action creator.
 * @param {function} async (vals, thunkApi) - The payload creator function. This function should return a promise that resolves to the payload value.
 * 
 * @returns {object} - An action object.
 */
export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, thunkApi) => {
    try {
      await TimeConsumerDelay({
        method: false, // set true for fulfilled response and false for rejection
        time: 4000
      });
      return vals;
    } catch (error) {
      logToFile('TimeAddVal Error: ' + error)
      thunkApi.abort(error);
    }
  }
);