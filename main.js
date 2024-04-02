#! /usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 10000; // Dollar
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct");
    // console.log("current account balance is ${myBalnce}")
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawal method",
                choices: ["Fast Cash", "Enter Amount"],
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount",
                    choices: ["500", "1000", "2000", "5000"],
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
;
