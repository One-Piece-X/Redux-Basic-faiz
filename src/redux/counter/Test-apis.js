/**
 * Returns a promise that resolves or rejects after a certain delay based on the method parameter.
 *
 * @param {Object} params - An object containing the method and time parameters.
 * @param {boolean} params.method - If true, the promise will resolve after the delay. If false, the promise will reject.
 * @param {number} params.time - The delay in milliseconds before the promise resolves or rejects.
 * @returns {Promise} - A promise that resolves with "success" if method is true, or rejects with "error" if method is false.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (method) {
        res("success");
      } else {
        rej("error");
      }
    }, time);
  });
}