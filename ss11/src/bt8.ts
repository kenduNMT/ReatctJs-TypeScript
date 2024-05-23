class Accounts {
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

class SavingsAccounts extends Accounts {
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

class CheckingAccount extends Accounts {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public override withdraw(amount: number): void {
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

    public showAccountInfo(): void {
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
checkingAccount.withdraw(600);  // Expected: Successfully withdraws
checkingAccount.showAccountInfo();

// Rút vượt quá hạn mức cho phép
checkingAccount.withdraw(200);  // Expected: Withdrawal amount exceeds overdraft limit.
checkingAccount.showAccountInfo();
