//Global Scope
// Variables declared outside of any function or block have Global Scope.
// They can be accessed from anywhere in the code.

let globalA = 10; // This is a global variable

function printGlobal() {
  console.log("Inside function:", globalA); // Accessible inside a function
}

printGlobal();
console.log("Outside function:", globalA); // Accessible in the global scope

// ---

// 2. Function Scope
// Variables declared inside a function are only accessible within that function.

function functionScopeExample() {
  const functionScopedVar = "I am inside the function";
  console.log(functionScopedVar); // Works perfectly
}

functionScopeExample();

// This will cause an error because `functionScopedVar` does not exist in the global scope.
// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined


//3. Block Scope
// Variables declared with `let` and `const` inside a block `{}` are only accessible within that block.
// `var` is NOT block-scoped.

{
  let blockLet = 10;
  const blockConst = 20;
  var blockVar = 60; // 'var' is function-scoped or global-scoped
  console.log("Inside block (let):", blockLet);
  console.log("Inside block (const):", blockConst);
  console.log("Inside block (var):", blockVar);
}

// console.log("Outside block (let):", blockLet); // ReferenceError: blockLet is not defined
// console.log("Outside block (const):", blockConst); // ReferenceError: blockConst is not defined
console.log("Outside block (var):", blockVar); // Prints 60. 'var' "leaks" out of the block.

//4. Lexical Scope (Lexical Environment) 
// An inner function has access to the variables of its outer functions.
// This is called lexical scoping. The "scope chain" goes from inner to outer.

let lexicalVar = 30; // Global scope

function outer() { // Outer scope
  let outerVar = "Outer";
  function inner() { // Inner scope
    // `inner` can "see" `outerVar` and `lexicalVar` because of the scope chain.
    console.log("From inner function:", outerVar, "&", lexicalVar);
  }
  inner();
}
outer();
