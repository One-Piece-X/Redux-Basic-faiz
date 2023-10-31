import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 * 
 * @param {number} val - The current value of the counter.
 * @returns {Object} - An action object with a payload containing the current value of the counter.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action creator for the "counter/subs" action.
 */
export const subs = createAction("counter/subs");
/**
 * An async thunk action creator that adds a value to the time after a delay.
 * 
 * @function
 * @async
 * @param {Object} vals - The value(s) to be added.
 * @param {Object} thunkApi - A Redux Toolkit object containing several Redux methods.
 * @returns {Promise} - A promise that resolves to the value(s) to be added.
 * @throws {Error} - If the TimeConsumerDelay method rejects, it logs the error and aborts the thunk.
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
      console.log({ error });
      thunkApi.abort(error);
    }
  }
);