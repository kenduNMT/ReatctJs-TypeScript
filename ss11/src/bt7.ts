class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    public withdraw(amount: number): void {
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

    public getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    public calculateInterest(): number {
        return this.balance * (this.interestRate / 100);
    }

    public showAccountInfo(): void {
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
