/**
 * @description Creates an object with 'age' property initialized to 0 and sets up
 * an interval to increment 'age' every second.
 */
function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // Calls every 1000 milliseconds.
    self.age++;
  }, 1000);
}


const getCode = (function () {
  const apiCode = "0]Eal(eh&2";

  return function () {
    return apiCode;
  };
})();

console.log(getCode());

/**
 * @description Creates a closure that returns a function, `getName`, which stores
 * and retrieves a given `name` argument. The `getName` function has access to the
 * `name` variable even after the `pet` function has returned, due to the scope chain
 * in JavaScript.
 *
 * @param {string} name - Initialized as a local variable within the `pet` function.
 *
 * @returns {any} A function that returns the value of `name`.
 */
const pet = function (name) {
  /**
   * @description Returns the value of the `name` variable.
   *
   * @returns {string|undefined} The value of the variable `name`.
   */
  const getName = function () {
    return name;
  };
  return getName;
};
const myPet = pet("Vivie");

console.log(myPet());

