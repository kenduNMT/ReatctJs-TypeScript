function TheoDoiPass(sokytumin: number, sokytumax: number) {
    return function(target: any, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        };

        const setter = function(newVal: string) {
            if (newVal.length < sokytumin || newVal.length > sokytumax) {
                throw new Error(`Password must be between ${sokytumin} and ${sokytumax} characters long`);
            }
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

class User {
    username: string;

    @TheoDoiPass(8, 20)
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

try {
    const user = new User('user1', 'password123');
    console.log('User created:', user);

    user.password = 'short'; 
} catch (error) {
    console.error((error as Error).message);
}

try {
    const user = new User('user2', 'toolongpasswordtoolongpassword'); 
} catch (error) {
    console.error((error as Error).message);
}
