type Users = {
    isAuthenticated: boolean;
    roles: string[];
};

// Giả định có một user hiện tại (thường sẽ lấy từ context hoặc request trong ứng dụng thực tế)
const currentUser: Users = {
    isAuthenticated: true,
    roles: ['admin', 'user']
};

function AuthDecorator(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        if (!currentUser.isAuthenticated) {
            throw new Error("User is not authenticated");
        }
        return originalMethod.apply(this, args);
    };
}

function RoleDecorator(requiredRoles: string[]): MethodDecorator {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const hasRequiredRole = requiredRoles.some(role => currentUser.roles.indexOf(role) !== -1);
            if (!hasRequiredRole) {
                throw new Error(`User does not have the required roles: ${requiredRoles.join(', ')}`);
            }
            return originalMethod.apply(this, args);
        };
    };
}

function composition(...decorators: MethodDecorator[]): MethodDecorator {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
        for (const decorator of decorators) {
            decorator(target, propertyKey, descriptor);
        }
    };
}

// Sử dụng các decorator
class SecureService {
    @composition(
        AuthDecorator,
        RoleDecorator(['admin'])
    )
    secureMethod() {
        return "This is a secure method";
    }

    @composition(
        AuthDecorator,
        RoleDecorator(['user'])
    )
    userMethod() {
        return "This method is for users";
    }
}

// Kiểm tra kết quả
const service = new SecureService();

try {
    console.log(service.secureMethod()); // Kết quả: "This is a secure method"
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}

try {
    console.log(service.userMethod()); // Kết quả: "This method is for users"
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}
