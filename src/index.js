import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import fs from 'fs';
import App from "./App";
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
const rootElement = document.getElementById("root");
if(!rootElement) {
    logToFile('Error: Root element not found');
    throw new Error('Root element not found');
}
const root = createRoot(rootElement);
try {
    root.render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    );
    logToFile('App rendered successfully');
} catch (error) {
    logToFile('Render Error: ' + error);
    throw error;
}