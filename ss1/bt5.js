const accounts = [
    { userName: "user1", password: "password1" },
    { userName: "user2", password: "password 2" },
    { userName: "user3", password: "password3" },
    { userName: "user4", password: "password4" }
];

function checkAccountsForSpaces(accountArray) {
    const invalidAccounts = [];
    accountArray.forEach((account, index) => {
        if (account.password.includes(' ')) {
            invalidAccounts.push(index);
        }
    });
    if (invalidAccounts.length > 0) {
        console.log("Các tài khoản có password chứa dấu cách:");
        invalidAccounts.forEach(index => {
            console.log(`Vị trí: ${index}, UserName: ${accounts[index].userName}`);
        });
    } else {
        console.log("Không có tài khoản nào có password chứa dấu cách.");
    }
}

checkAccountsForSpaces(accounts);
