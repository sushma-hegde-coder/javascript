//functions
//in js every func is return func by default
//you can give any no of arguments, it consumes what is passed, remaining is ignored ....will not throw error, NaN if not passed sufficient no of arguments

//objects of js
//   window                      type window in browser
//      document
//      history
//      location
//      navigator
//a.b.c


function test(a,b){    //in developer tool go to console and type test(2,3)       //  test(2) -> 2+infinite = infinite no ie NaN
    return a+b;         //write test returns whole func
}                      //  test(2) ->2nd argument taken as NaN -> 2+infinite = infinite no ie NaN
                       

function test1(){
  console.log("test"); //test1(2,3) => prints test and returns undefined because you are not returning anything
}

//default arguments: all default arguments shoudl be defined at the end
function test2(a, b = 0){  //test2(3) =>3+0=3
    console.log(a,b);      //test2(3,6)=> 3+6=9
    return a + b;
}

//not returning something or not passing something at that time we get undefined at console

//function fun_name(): named function
//anonymous



//bind function

const person={
    name: "test",
    age:12,
    greeting: function(){
        console.log("OUTSIDE", this);  //this refers to person object
        //this: access current object properties
        setTimeout(function(){
        console.log("INSIDE", this);
        console.log("hello from"+this.name); //this refers to window object
     }.bind(this),     // bind to this object ie person .bind(object_name) 
                     //tell function to take scope of person instead of window bind 'this' to person object
                          //tell settimeout to take person as its object  .bind(person) 
                     //can define new object const animal={
                     //                                name: "cow",    
                      //                              }
                     //   and write .bind(animal);
     2000);
    },
};

const human={
    name: "test",
    age:12,
    greeting:function(){  //if you use arrow func here, i'm binding it to its parent object ie window
        console.log("OUTSIDE", this);  //this refers to person object
        //this: access current object properties
        setTimeout(() => {
        console.log("INSIDE", this);
        console.log("hello from"+this.name); //this refers to window object        
    }, 2000);
 },
};

//use arrow function only for these 2 scenarios
//async function : () =>
//events : () =>
