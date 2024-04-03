import inquirer from "inquirer";
import chalk from "chalk";
//ATM Machine
console.log(chalk.gray.bold.italic.bgWhite("\n ATM Machine "));
let myBalance = 50000;
let pincode = 1234;
let input = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.magentaBright.bold.italic("\nEnter your pin\n"),
    },
]);
if (input.pin === pincode) {
    console.log(chalk.cyanBright.bold.italic("Correct pin code!"));
    let option = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.greenBright.bold.italic("Please select options"),
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (option.options === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.yellowBright.bold.italic("Enter your amount \n"),
            },
        ]);
        console.log(chalk.magentaBright.bold.italic("Your remaining balance is : "), chalk.blueBright.bold.italic(myBalance - amount.amount));
    }
    if (option.options === "Check Balance") {
        console.log(chalk.magentaBright.bold.italic("Your current balance is : "), chalk.greenBright.bold.italic(myBalance));
    }
}
else {
    console.log(chalk.redBright.bold.italic("Incorrect pin code"));
}
