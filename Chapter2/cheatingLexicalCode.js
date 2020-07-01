/**
 * eval(string)
 *
 * eval is function property of global object, it takes string as a parameter, and treats the content of the
 * string as an javascript code and performs evaluation
 *
 * @format
 */

console.log(eval('3+9')); //11
console.log(eval('new String(3+6)')); // String {'9'}
console.log(eval(new String('2+6'))); // String {'2+6'}

function foo(str, a) {
  eval(str); //since it evaluates the b to 90, the scope lookup does not happen for b any more
  console.log(a + b);
}
var b = 6;
foo('var b=90', 2);

/***
 * With
 */

var obj = { a: 1, b: 2, c: 3 };
//daunting task
obj.a = 90;
obj.b = 91;
obj.c = 92;

console.log(obj);

//can be done with with
with (obj) {
  a = 40;
  b = 41;
  c = 42;
}
console.log(obj);

//But this may lead to leaking of varaiable in global scope
var o1 = { p: 1, q: 2 };
var o2 = { c: 99, d: 999 };

function XYZ(o) {
  with (o) {
    p = 8;
    q = 88;
  }
}

XYZ(o1);
console.log(o1.p, o1.q); //8,88

XYZ(o2);
console.log(o2);
console.log(o2.p, o2.q); //undefined --> i has leaked to global scope
console.log(p, q); //the p and q are variable craeted to global scope
