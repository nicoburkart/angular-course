import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UdemyCourseFormComponent = class UdemyCourseFormComponent {
    constructor() {
        this.categories = [
            { id: '0', name: 'Development' },
            { id: '1', name: 'Art' },
            { id: '2', name: 'Languages' }
        ];
    }
    onSubmit(form) {
        console.log(form.value);
    }
};
UdemyCourseFormComponent = __decorate([
    Component({
        selector: 'udemy-course-form',
        templateUrl: './udemy-course-form.component.html',
        styleUrls: ['./udemy-course-form.component.css']
    })
], UdemyCourseFormComponent);
export { UdemyCourseFormComponent };
//# sourceMappingURL=udemy-course-form.component.js.map