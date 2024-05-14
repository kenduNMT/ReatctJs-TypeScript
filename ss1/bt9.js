function getAllHobbies(users) {
    const hobbiesArrays = users.map(user => user.hobbies);

    const allHobbies = hobbiesArrays.reduce((acc, hobbies) => {
        return acc.concat(hobbies);
    }, []);

    // Sử dụng Set để loại bỏ các phần tử trùng lặp và chuyển đổi lại thành mảng
    const uniqueHobbies = [...new Set(allHobbies)];

    return uniqueHobbies;
}

const usersList = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Drawing'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking', 'Reading'] },
];

const uniqueHobbiesResult = getAllHobbies(usersList);
console.log(uniqueHobbiesResult);
