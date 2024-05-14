const classes = [
    { id: 1, number: 25 },
    { id: 2, number: 35 },
    { id: 3, number: 45 },
    { id: 4, number: 50 }
];

const modifiedClasses = classes.map(cls => {
    if (cls.number < 30) {
        return { ...cls, number: cls.number + 10 };
    } else if (cls.number > 40) {
        return { ...cls, number: cls.number - 10 };
    } else {
        return cls;
    }
});

console.log(modifiedClasses);
