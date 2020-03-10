import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ListComponent = class ListComponent {
    constructor() {
        this.showLabel = false;
    }
};
__decorate([
    Input('items')
], ListComponent.prototype, "items", void 0);
__decorate([
    Input('itemLabel')
], ListComponent.prototype, "itemLabel", void 0);
__decorate([
    Input('showLabel')
], ListComponent.prototype, "showLabel", void 0);
ListComponent = __decorate([
    Component({
        selector: 'list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map