const users = [
    {
        name: "Nguyễn Văn A",
        address: "Hà Nội",
        email: "nva@rikkei.com",
    },
    {
        name: "Trần Văn Bình",
        address: "Hà Nội",
        email: "tvbinh@rikkei.com",
    },
    {
        name: "Nguyễn Hồng Anh",
        address: "Thái Bình",
        email: "nhanh@gmail.com",
    },
    {
        name: "Lê Văn Nam",
        address: "Hà Nội",
        email: "lvnam@gmail.com",
    },
];

function filterByAddressAndEmail(users, city, emailDomain) {
    const filteredUsers = users.filter(user =>
        user.address === city && user.email.endsWith(emailDomain)
    );

    const foundUser = users.find(user =>
        user.address === city && user.email.endsWith(emailDomain)
    );

    console.log("Filtered Users:", filteredUsers);
    console.log("First Found User:", foundUser);

    return filteredUsers;
}

console.log(filterByAddressAndEmail(users, "Hà Nội", "@rikkei.com"));
