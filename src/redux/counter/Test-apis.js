import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a file.
 *
 * @param {string} message - The message to log.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
/**
 * Executes a method after a specified delay and returns a Promise that resolves to "success" if the method executes successfully.
 * 
 * @param {Object} params - An object containing the method to execute and the delay time.
 * @param {Function} params.method - The method to execute.
 * @param {Number} params.time - The delay time in milliseconds.
 * @returns {Promise} - A Promise that resolves to "success" if the method executes successfully, and rejects with an Error if the method execution fails.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        if (method) {
          res("success");
          logToFile("Success: Method executed successfully");
        } else {
          throw new Error("Error: Method execution failed");
        }
      } catch (error) {
        logToFile('TimeConsumerDelay Error: ' + error);
        rej(error);
      }
    }, time);
  });
}