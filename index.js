#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 20000;
let enterPin = await inquirer.prompt([
    {
        message: "Please enter your pin =",
        name: "pin",
        type: "number"
    }
]);
if (enterPin.pin === 1234) {
    console.log("You entered correct pin.");
    let options = await inquirer.prompt([
        {
            message: "Please select one Option.",
            name: "choices",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Ballance"]
        }
    ]);
    // Fast Cash :
    if (options.choices === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                message: "Please select one option.",
                name: "cash",
                type: "list",
                choices: [1000, 5000, 10000, 15000]
            }
        ]);
        if (fastCash.cash == 1000 || fastCash.cash == 5000 || fastCash.cash == 10000 || fastCash.cash == 15000) {
            myBalance -= fastCash.cash;
            console.log(` Your remaining ballance is = ${myBalance}`);
        }
    }
    // Withdraw :
    if (options.choices === "Withdraw") {
        let withDraw = await inquirer.prompt([
            {
                message: "Please enter your amount =",
                name: "cash",
                type: "number"
            }
        ]);
        if (withDraw.cash <= myBalance) {
            myBalance -= withDraw.cash;
            console.log(` Your remaining ballance is = ${myBalance}`);
        }
        else {
            console.log("Insufficient ballance!");
        }
    }
    // Ballance Check :
    if (options.choices === "Check Ballance") {
        console.log(myBalance);
    }
}
else {
    console.log("You entered incorrect pin!");
}
