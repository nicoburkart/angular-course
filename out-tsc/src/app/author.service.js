import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthorService = class AuthorService {
    constructor() { }
    getAuthors() {
        return ['author1', 'author2', 'author3'];
    }
};
AuthorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthorService);
export { AuthorService };
//# sourceMappingURL=author.service.js.map