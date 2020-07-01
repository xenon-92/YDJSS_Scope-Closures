/**
 * LEXICAL SCOPE: IT IS AN AUTHOR TIME DECISION
 *
 * scopes releated assignment are either done by '=' or by formal parameter
 *
 * function foo(a) { --> a is formal parameter
 *   var b = 2 * a; --> b is assigned
 *   function bar(c) { --> c formal parameter
 *     console.log(a, b, c);
 *   }
 *   bar(b * 3);
 * }
 * foo(9);
 *
 * @format
 */
function foo(a) {
  //--> a is formal parameter
  var b = 2 * a; //--> b is assigned
  function bar(c) {
    //--> c formal parameter
    console.log(a, b, c);
  }
  bar(b * 3); //RHS reference
}
foo(9);

/**
 * Global varaible are also property of the window object.Hence it is possible to referece the the global varaible
 * by the window property or by lexical name
 */

var globalVar = 'Tudu';
console.log(window.globalVar, globalVar, window.globalVar == globalVar); //Tudu Tudu true

/**
 * variable shadowing
 * scope lookup starts from the innermost scope executed at the time and travels outwards once the first match is found
 */

function outer(x) {
  var a = 9 * x;//27
  function middle(y) {
    var a = 2 * y; //here a =27 so var a =54
    function inner(z) {
      var b = a * z;////now a refers to the outermsot 'a', that is of middle and not 'a' of function outer
    }
    inner(1);
  }
  middle(2);
}
outer(3);
