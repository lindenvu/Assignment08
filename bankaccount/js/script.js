/*eslint-env browser*/

// HELPER FUNCTION TO GET DOM ELEMENTS
var myBankAccount, missingName = true, amount, invalidInput, $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};



function BankAccount(ownerName) {
    "use strict";
    var owner = ownerName, balance = 0;
    return {
        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount;
        },
        deposit:  function (depositAmount) {
            balance += depositAmount;
        },
        getOwnerName: function () {
            return owner;
        },
        getBalance: function () {
            return balance;
        }
    };
}

function validateDeposit(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    window.console.log("Inputted " + input);
    if (isNaN(input)) {
        window.alert("You've entered an invalid amount.");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

function validateWithdrawal(msg) {
    "use strict";
    var input = parseFloat(window.prompt(msg));
    window.console.log("Inputted " + input);
    if (isNaN(input)) {
        window.alert("You've entered an invalid amount.");
        invalidInput = true;
    } else if (input > myBankAccount.getBalance()) {
        window.alert("Your balance is not enough for this withdrawal amount");
        invalidInput = true;
    } else {
        amount = input;
        invalidInput = false;
    }
}

$("Name").addEventListener(
    "click",
    function () {
        "use strict";
        myBankAccount = new BankAccount(window.prompt("Enter your Name"));
        missingName = false;
        $("Balance").innerHTML = myBankAccount.getOwnerName() + "'s Balance: $" + myBankAccount.getBalance();
    }
);

$("Deposit").addEventListener(
    "click",
    function () {
        "use strict";
        if (missingName) {
            window.alert("Please enter your Name 1st.");
        } else {
            do { validateDeposit("Enter deposit amount in the format x.xx"); } while (invalidInput);
            myBankAccount.deposit(amount);
            $("Balance").innerHTML = myBankAccount.getOwnerName() + "'s Balance: $" + myBankAccount.getBalance();
        }
    }
);

$("Withdrawal").addEventListener(
    "click",
    function () {
        "use strict";
        if (missingName) {
            window.alert("Please enter your Name 1st.");
        } else {
            do { validateWithdrawal("Enter withdrawal amount in the format x.xx"); } while (invalidInput);
            myBankAccount.withdrawal(amount);
            $("Balance").innerHTML = myBankAccount.getOwnerName() + "'s Balance: $" + myBankAccount.getBalance();
        }
    }
);