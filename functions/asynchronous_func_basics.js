console.log("app started");
// debugger; /* breakpoint ....application stops at this point*/
setTimeout(function () {
    console.log("TASK1 ");
    setTimeout(function (){
      console.log("some task here");
    }, 1000);
}, 0);   //irrespective of time given , it comes at last whether you give 2000 sec or 0 sec 

console.log("ap finished");

//ui block sync then async
//till task finishes you won't be albe to do anything
// better to exit
//pop up opens browser crashes
// long runnig tasks execute in asynchronous manner

//run time environment is in browser. so client side scripting lang........stack heap are only 2 memories
//web apis identify asynchro and synchro funcitons  

//call me back when you are done


/* 1.one by one execution
   2. synchronous functions put on to stack . stack limit 32,000 functions 
   3. asynchrounous functions are recognised by browser and put aside 
   4. once browser finishes it return synchrounous part to call back queue
   5. event log loads synchrounoous func on to stack once stack becomes empty*/
