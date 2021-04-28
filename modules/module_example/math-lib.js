// custom module/library
//inline export
export function add(a, b) { 
    console.log("SUM", a + b);
  }
  function sub(a, b) {
    console.log("SUB", a - b);
  }
  function mul(a, b) {
    console.log("MUL", a * b);
  }
  function div(a, b) {
    console.log("SUM", a / b);
  }
  
  //named exports : literal : mainly used named exports
  //scroll down and export at the end good coding practice
  export { sub, mul };

  //default export: only one default is allowed /file
  //can be one object, one array, one func
  export default div;

 // export default  {div,sub}; ie make it as object and export
 //we generally don't recommend
