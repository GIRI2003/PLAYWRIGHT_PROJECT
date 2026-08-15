// COnditional statements - if - else 

let age = 17;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}

let marks = 95;
if (marks >= 90) {
    console.log("Grade A");
    if (marks >= 95) {
        console.log("Grade A++");
    } if (marks === 100) {
        console.log("Elegible for scholarship");
    }
}
else {
    console.log("Failed");
}

//worst way to write a conditional statement
/*
let browser = "edge";
if (browser.toLowerCase() === "chrome") {
    console.log("Launch Chrome");
}
if (browser === "firefox") {
    console.log("Launch Firefox");
}
if (browser === "edge") {
    console.log("Launch edge");
}
if (browser === "brave") {
    console.log("Launch Brave");
}
else {
    console.log("Invalid browser");
}
*/

// if else if----else -> Better, but even it give some performance issue
let browser = "  IE  ";
if (browser.toLowerCase().trim() === "chrome") {
    console.log("launch chrome");
}
else if (browser.toLowerCase().trim() === "firefox") {
    console.log("launch firefox");
}
else if (browser.toLowerCase().trim() === "edge") {
    console.log("launch edge");
}
else if (browser.toLowerCase().trim() === "safari") {
    console.log("launch safari");
}
else {
    console.log("Invalid browser.. enter correct browser");
}
