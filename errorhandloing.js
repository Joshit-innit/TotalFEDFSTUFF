//exception handling are given by try, catch, finally blocks.
//  try{
//  }
// catch() {
//  }
// finally {
//  }
let a = 10/0;
console.log(a);

try {
  a = 10 / 0;
  console.log(a);

  throw new Error("Division by zero error");
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("Cleanup can be done here.");
}

