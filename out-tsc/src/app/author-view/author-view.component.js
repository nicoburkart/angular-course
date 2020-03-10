import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthorViewComponent = class AuthorViewComponent {
    constructor(authorService) {
        this.authors = authorService.getAuthors();
    }
    ngOnInit() {
    }
};
AuthorViewComponent = __decorate([
    Component({
        selector: 'author-view',
        templateUrl: './author-view.component.html',
        styleUrls: ['./author-view.component.css']
    })
], AuthorViewComponent);
export { AuthorViewComponent };
//# sourceMappingURL=author-view.component.js.map