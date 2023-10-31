import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates an action to add ten to the counter.
 *
 * @param {number} val - The current value of the counter.
 * @returns {Object} - An action object with a type of "counter/addten" and the payload being the current value of the counter.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action with the type "counter/subs".
 * 
 * @returns {Object} - An action object with the type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An async thunk action that adds a value after a delay.
 * 
 * @param {Object} vals - The values to add.
 * @param {Object} thunkApi - The thunk API.
 * 
 * @returns {Promise} A promise that resolves to the added values after a delay.
 * 
 * @throws {Error} If the promise is rejected, it throws an error and aborts the thunk.
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