import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ZippyComponent = class ZippyComponent {
    constructor() {
        this.isCollapsed = true;
    }
};
__decorate([
    Input('title')
], ZippyComponent.prototype, "title", void 0);
ZippyComponent = __decorate([
    Component({
        selector: 'zippy',
        templateUrl: './zippy.component.html',
        styleUrls: ['./zippy.component.css']
    })
], ZippyComponent);
export { ZippyComponent };
//# sourceMappingURL=zippy.component.js.map