
import { getDogs, getCats, getBirds, firstPromise, secondPromise } from '../utils/utilPromises.js';

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  return Promise.resolve("Resolved!")
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise that will be rejected with the string "Rejected!"
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  return Promise.reject("Rejected!")
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  return new Promise((resolve, reject) => {
    if (param === true) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  });
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function (please do NOT use async/await)
 */

function promisesChaining() {
  let chainingResult = '';

  //PLACE YOUR CODE BETWEEN THIS LINE:
  return firstPromise()
        .then(() => {
            return secondPromise();
        })
        .then(() => {
            chainingResult = "Promises chained";
            return chainingResult;
        });
  //AND THIS ONE
}

/**
 * Task-5: Get animals using Promise.all
 * 
 * 1. Implement the getAnimals() function that combines results from three promise-based functions:
 *    - getDogs(), getCats() and getBirds() imported from './utils/utilPromises'
 * 2. Use Promise.all to wait for all three promises to resolve
 * 3. After all promises resolve, transform the results by converting each string to uppercase:
 *    ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', 'BIRDS']
 * 
 * Expected output: ['DOGS', 'CATS', 'BIRDS']
 * 
 * Requirements:
 * - Use .then() chaining (NOT async/await)
 * - Must return a Promise that resolves to the uppercase array
 * 
 * @returns {Promise<string[]>} Promise resolving to array of uppercase animal names
 */

function getAnimals() {
  //PLACE YOUR CODE BETWEEN THIS LINE:
  return Promise.all([getDogs(), getCats(), getBirds()]).then(res => res.map(item => item.toUpperCase()))
  //AND THIS ONE
}

/**
 * Task-6:
 * Create a promise that resolves after 1 second of delay with the text "Resolved"
 * @returns
 */

function promiseWithDelay() {
  return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 1000);
    });
}

export {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
  promiseWithDelay
};
