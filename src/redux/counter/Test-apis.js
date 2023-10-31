/**
 * Returns a Promise that resolves or rejects based on the method parameter after a specified delay.
 * 
 * @param {Object} param0 - An object containing the method and time properties.
 * @param {boolean} param0.method - If true, the Promise will resolve. If false, the Promise will reject.
 * @param {number} param0.time - The delay in milliseconds before the Promise resolves or rejects.
 * @returns {Promise} - A Promise that resolves with the string "success" if method is true, or rejects with the string "error" if method is false.
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