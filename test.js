/**
 * @description defines a variable `self` that increments its age by 1 every 1000
 * milliseconds through a setInterval callback function.
 */
function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // Calls setInterval.
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
 * @description Creates a closure that returns the `name` parameter when its `getName`
 * function is called. The `name` is encapsulated within the closure, allowing it to
 * maintain its value even after the outer function has returned.
 *
 * @param {string} name - Defined at the outer scope of the function, accessible
 * within its inner scope.
 *
 * @returns {any} A function that returns the original name passed to it.
 */
const pet = function (name) {
  /**
   * @description Returns the value of the `name` variable.
   *
   * @returns {string} Assumed to be a variable named `name`.
   */
  const getName = function () {
    return name;
  };
  return getName;
};
const myPet = pet("Vivie");

console.log(myPet());

