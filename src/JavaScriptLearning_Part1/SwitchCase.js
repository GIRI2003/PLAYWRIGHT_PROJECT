
let browser = "  opera"

switch (browser.toLowerCase().trim()) {
    case "chrome":
        console.log("Launching Chrome...");
        break;

    case "edge":
        console.log("LLaunching Edge...");
        break;

    case "firefox":
        console.log("Launching Firefox...");
        break;

    case "safari":
        console.log("Launching Safari...");
        break;

    default:
        console.log("Invalid Browser... please enter a valid browser");
        break;

}


/*--------------------------------------*/

let ch = 'O';
switch (ch.toLowerCase()) {
    case 'a':

    case 'e':

    case 'i':

    case 'o':

    case 'u':
        console.log(ch + " is a vowel");
        break;

    default:
        console.log(ch + " is a consonent");
        break;
}


/*--------------------------------------*/

let marks = 1000;
if (marks >= 0 && marks < 101) {

    switch (true) {
        case marks >= 90:
            console.log("Grade A");
            break;
        case marks >= 70:
            console.log("Grade B");
            break;
        case marks >= 40:
            console.log("Grade C");
            break;
        default:
            console.log("Grade D");
            break;
    }
} else {
    console.log(marks + " is not valid. Please enter a valid mark");
}