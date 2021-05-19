/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */


let nameGuest = prompt("Bitte geben Sie Ihren Namen ein: ");
let alter = prompt("Bitte geben Sie Ihr Alter ein: ");


switch (true) {
    
    case (alter < 6 && alter >= 0):
        console.log("Hier ist Deine Milch, " + nameGuest);
        break;
    case (alter < 13):
        console.log("Hier ist Dein Saft, " + nameGuest);
        break;
    case (alter > 17):
    console.log("Hier ist Dein Wein, " + nameGuest);
        break;
    default:
        console.log("Gibt nix, " + nameGuest);
          break;
}
