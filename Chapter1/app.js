/** @format */

//Tokenizing/lexing --> Breaking up of strings of character into chunks of token

//Parsing --> conversion of chunks of code into AST(abstract syntax tree)

//code generation --> conversion of AST into executable code

/**
 * # Javascript compiles the code first and then executes it
 * #
 * # variable and function declaration are handled by the compiler
 * # whereas assignment of the values are done by the Engine
 * # That is why hoisting is possible in Javascript
 */

//LHS vs RHS lookup
//failed LHS lookup results in the creation of varaible in the global scope

//Example of failed LHS lookup
function outer() {
  function inner() {
    i = 9;
  }
  inner();
}
outer();

console.log(i, window.i === i); //9,true

/**
 * $ reference error : This is a scope resolution, failure releated error
 * $ type error: Scope resolution was sucessful but we try to perform some operation which is invalid
 */

/**UNCOMMENT**/
//var j=p;//reference error as we did not declare p

/**UNCOMMENT**/
//var k = n.toString();//type error, scope resolution was successful due to hoisting but we tried to do something that is invalid.
//var n;

function foo(a) {
  console.log(a + b); // RHS failed lookup of b, as it is not hoisted ||reference error||
  b = a;
}
//foo(3);

function foo1(a) {
  console.log(a + b); // 7+undefiend = NaN
  var b = a;
}
foo1(7); //NaN

function foo2(a) {
  console.log(a + b.toString()); //type error
  var b = a;
}

//foo2(2);

function foo3(a) {
  console.log(a + b.toString()); //reference error because scope resolution failure comes first
  b = a;
}
//foo3(4);
