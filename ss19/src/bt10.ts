type Constructor<T = {}> = new (...args: any[]) => T;

function RequiredField(target: any, propertyKey: string | symbol): void {
    if (!target.constructor.requiredFields) {
        target.constructor.requiredFields = [];
    }
    target.constructor.requiredFields.push(propertyKey);
}

function ValidateForm<T extends Constructor>(Base: T) {
    return class extends Base {
        submit(...args: any[]) {
            const requiredFields = (this.constructor as any).requiredFields as (string | symbol)[];
            if (requiredFields) {
                for (const field of requiredFields) {
                    if (!(this as any)[field]) {
                        throw new Error(`Field ${String(field)} is required and cannot be empty`);
                    }
                }
            }
            if ((this as any).submit) {
                (this as any).submit(...args);
            }
        }
    };
}

// Sử dụng các decorator

@ValidateForm
class Form {
    @RequiredField
    name: string;

    @RequiredField
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    submit() {
        console.log("Form submitted successfully");
    }
}

// Kiểm tra kết quả
try {
    const form = new Form("John Doe", "john.doe@example.com");
    form.submit(); // Kết quả: "Form submitted successfully"
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}

try {
    const form = new Form("", "john.doe@example.com");
    form.submit(); // Lỗi: "Field name is required and cannot be empty"
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}
