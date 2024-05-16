const typeConsole = (type = "log") => {
    const message = `Đây là type: ${type}`;

    switch (type) {
        case "log":
            console.log(message);
            break;
        case "warn":
            console.warn(message);
            break;
        case "error":
            console.error(message);
            break;
        default:
            console.log(message);
    }
};

typeConsole();         
typeConsole("warn");    
typeConsole("error");   
typeConsole("info");   
