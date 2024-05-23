"use strict";
class Account {
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
class SavingsAccount extends Account {
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
// Tạo một tài khoản từ lớp SavingsAccount
const savingsAccount = new SavingsAccount('123456', 1000, 2);
// In ra tiền lãi hàng tháng trong tài khoản đó
savingsAccount.showAccountInfo();
// Gửi thêm tiền vào tài khoản
savingsAccount.deposit(500);
// In lại tiền lãi hàng tháng
savingsAccount.showAccountInfo();
