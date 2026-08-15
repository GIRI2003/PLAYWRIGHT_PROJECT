
// && , &
// || , |

let m = 10;

/* && -> Shortcircuit will happen in the moment when condition is not satisified in 2nd condition
 Performance wise && is better */
if (m >= 5 && m < 5 && m > 5) { // 1st -> true, 2nd -> false(shortcircuit happens), 3rd -> true, 
    console.log("Pass");
} else {
    console.log("Fail");
}

let m = 10;

// & -> Goes through every conditions, if 1 condition fails it will goes to else part
// performance wise not that much better
if (m >= 5 & m < 5 & m > 5) { // 1st -> true, 2nd -> false(goes to 3rd also), 3rd -> true, 
    console.log("Pass");
} else {
    console.log("Fail");
}


/* ------------------------ || ------------------------------ */
// If first condition passes, it will comes to true block
let a = 10;
if (a > 9 || a >= 15 || a < 5) { // (true || false || false) 
    console.log("Pass.."); 
} else {
    console.log("Fail...");
}

/* ----------------------- | ------------------------------- */
// checks each and every condition
let a = 10;
if (a > 9 | a >= 15 | a < 5) { // (true | false | false) 
    console.log("Pass..");
} else {
    console.log("Fail...");
}