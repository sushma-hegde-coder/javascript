//main entry file
//#include
// import statement
// ./ : current folder
// ../: one level up

//import {  } from "module/relative-filepath";
//no access specifiers 
//scope to module

//is private by default
//export : public to make public

import { add, mul as multiply } from "./math-lib"; //ctrl space gives suggestions type inside { } 
import divide from "./math-lib"; //by default divide is imported bcz only one default export is used
//import mathObj form "./math-lib": 4kb                                // for default ones you don't use curly braces, others use curly braces
add(2,3);
//mathObj.div(6,3) //if you import many func as one object
multiply(3,4)
divide(5,2);
                               

