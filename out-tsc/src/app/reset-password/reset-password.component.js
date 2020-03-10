import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() {
        this.form = new FormGroup({
            oldPassword: new FormControl('', Validators.required, PasswordValidators.validOldPassword),
            newPassword: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        }, PasswordValidators.matchingPassword);
    }
    get oldPassword() {
        return this.form.get('oldPassword');
    }
    get newPassword() {
        return this.form.get('newPassword');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    log() {
        console.log(this.form);
    }
};
ResetPasswordComponent = __decorate([
    Component({
        selector: 'reset-password',
        templateUrl: './reset-password.component.html',
        styleUrls: ['./reset-password.component.css']
    })
], ResetPasswordComponent);
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map