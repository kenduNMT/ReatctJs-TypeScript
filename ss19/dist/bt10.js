"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function RequiredField(target, propertyKey) {
    if (!target.constructor.requiredFields) {
        target.constructor.requiredFields = [];
    }
    target.constructor.requiredFields.push(propertyKey);
}
function ValidateForm(Base) {
    return class extends Base {
        submit(...args) {
            const requiredFields = this.constructor.requiredFields;
            if (requiredFields) {
                for (const field of requiredFields) {
                    if (!this[field]) {
                        throw new Error(`Field ${String(field)} is required and cannot be empty`);
                    }
                }
            }
            if (this.submit) {
                this.submit(...args);
            }
        }
    };
}
// Sử dụng các decorator
let Form = class Form {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    submit() {
        console.log("Form submitted successfully");
    }
};
__decorate([
    RequiredField
], Form.prototype, "name", void 0);
__decorate([
    RequiredField
], Form.prototype, "email", void 0);
Form = __decorate([
    ValidateForm
], Form);
// Kiểm tra kết quả
try {
    const form = new Form("John Doe", "john.doe@example.com");
    form.submit(); // Kết quả: "Form submitted successfully"
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Unknown error:", error);
    }
}
try {
    const form = new Form("", "john.doe@example.com");
    form.submit(); // Lỗi: "Field name is required and cannot be empty"
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Unknown error:", error);
    }
}
