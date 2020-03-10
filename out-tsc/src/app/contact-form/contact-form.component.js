import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactFormComponent = class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' },
            { id: 3, name: 'LOL' }
        ];
    }
    log(x) {
        console.log(x);
    }
    submit(f) {
        console.log(f);
    }
};
ContactFormComponent = __decorate([
    Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    })
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map