"use strict";
class Accounts {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccounts extends Accounts {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * (this.interestRate / 100);
    }
    showAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
        console.log(`Interest Rate: ${this.interestRate}%`);
        console.log(`Monthly Interest: ${this.calculateInterest()}`);
    }
}
class CheckingAccount extends Accounts {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be positive.");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Withdrawal amount exceeds overdraft limit.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
    showAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
        console.log(`Overdraft Limit: ${this.overdraftLimit}`);
    }
}
// Tạo một tài khoản từ lớp CheckingAccount
const checkingAccount = new CheckingAccount('789012', 500, 200);
// In ra thông tin tài khoản
checkingAccount.showAccountInfo();
// Rút quá số tiền trong tài khoản nhưng trong hạn mức cho phép
checkingAccount.withdraw(600); // Expected: Successfully withdraws
checkingAccount.showAccountInfo();
// Rút vượt quá hạn mức cho phép
checkingAccount.withdraw(200); // Expected: Withdrawal amount exceeds overdraft limit.
checkingAccount.showAccountInfo();
