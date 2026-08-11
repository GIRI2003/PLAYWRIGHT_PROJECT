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
let browser = "Chrome";
if (browser.toLowerCase() === "chrome") {
    console.log("Launch Chrome");
}
if (browser === "firefox") {
    console.log("Launch Firefox");
}
if (browser === "egde") {
    console.log("Launch edge");
}
if (browser === "brave") {
    console.log("Launch Brave");
}
else {
    console.log("Invalid browser");
}




