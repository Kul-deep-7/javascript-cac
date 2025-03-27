//basic syntax

/* switch (key) {
    case value:
        
        break;

    default:
        break;
}
        Important Notes
switch uses === (strict equality), not ==.

You must use break unless you want to fall through.

default is optional but good for handling unmatched values.


*/

const week ="mon"
switch (week) {
    case "mon":
        console.log("Monday")   
        break;
    case "tues":
        console.log("Tuesday")   
        break;
    case 3:
        console.log("Wednesday")   
        break;
    case 4:
        console.log("Thursday")   
        break;
    case 5:
        console.log("Friday")   
        break;
    case 6:
        console.log("Saturday")   
        break;
        
    default:
        console.log("Default")
        break;
}

// let marks = 87;

// switch (true) {
//   case marks >= 90:
//     console.log("Grade A");
//     break;
//   case marks >= 80:
//     console.log("Grade B");
//     break;
//   case marks >= 70:
//     console.log("Grade C");
//     break;
//   default:
//     console.log("Grade D");
// }
