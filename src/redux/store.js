import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a given message to the console and writes it to a log stream.
 * 
 * @param {string} message - The message to log.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
let store;
try {
    store = configureStore({
        reducer: {
            counter: counterReducer
        }
    });
} catch (error) {
    logToFile('Configure Store Error: ' + error);
    throw error;
}
export default store;