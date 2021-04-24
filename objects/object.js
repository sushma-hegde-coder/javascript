// dot notation
// bracket notation : dynamic properties
//object literals

const person={
    name:"sushma",
    age:34,
    greeting:function(){  //if you use arrow func here, i'm binding it to its parent object ie window
        console.log("OUTSIDE", this);  //this refers to person object
        //this: access current object properties
        setTimeout(() => {
        console.log("INSIDE", this);
        console.log("hello from"+this.name); //this refers to window object        
    }, 2000);
 },
};

// person['name'];
// person["greeting"](); //when something is dynamic use bracket notation

function getValue(key){
   return typeof person[key] === "function"? person[key]() : person[key];   //getValue('name')    getValue('greeting')
}


//object literals
function user1(firstName, lastName){        //how to return an object write key:value explicitly 
    return { 
        // key:value                                         //return {  in same line dont write { in next line
         firstName:firstName,     
         lastName:lastName,
         fullName:firstName + " " +lastName,
    }     ; 
}

function user(firstName, lastName){        
    return {                                         
         firstName, //property short hand     
         lastName,
         fullName: firstName + " "+lastName,
    }     ; 
}

//destructing
//const u =user["john", "doe"];
//const fullName = u. fullName;
//const firstName = u.firstName;

const { fullName, firstName } = user("john","doe"); //extracting data of user ...im extracting only fullName and firstName from object I created

//const{ fullName: userName, firstname } = user("john","doe");  //aliasing renaming the fullName as userName
