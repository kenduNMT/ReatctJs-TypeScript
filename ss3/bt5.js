const printArgs = (...args) => {
    console.log("Các đối số được truyền vào là:");
    args.forEach(arg => {
        console.log(arg);
    });
};

printArgs(1, "hello", [2, 3], { name: "John" });
