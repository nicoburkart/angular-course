export class PasswordValidators {
    static validOldPassword(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({ incorrectPassword: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
    static matchingPassword(control) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value) {
            return ({ passwordsShouldMatch: true });
        }
        return null;
    }
}
//# sourceMappingURL=password.validators.js.map