/**
 * @description defines a variable `self` that increments its age by 1 every 1000
 * milliseconds through a setInterval callback function.
 */
function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // Calls every second.
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
 * @description Returns a function that can be used to retrieve the provided name.
 * This returned function, `getName`, is a closure that retains access to the `name`
 * variable even after the `pet` function has completed execution.
 *
 * @param {string} name - Assigned to a variable used within the function.
 *
 * @returns {any} A function.
 */
const pet = function (name) {
  /**
   * @description Returns the value of the `name` variable.
   *
   * @returns {string} The value of the variable `name`.
   */
  const getName = function () {
    return name;
  };
  return getName;
};
const myPet = pet("Vivie");

console.log(myPet());

