import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LikeComponent = class LikeComponent {
    onClick() {
        this.isSelected = !this.isSelected;
        this.likes += this.isSelected ? 1 : -1;
    }
};
__decorate([
    Input('isSelected')
], LikeComponent.prototype, "isSelected", void 0);
__decorate([
    Input('likes')
], LikeComponent.prototype, "likes", void 0);
LikeComponent = __decorate([
    Component({
        selector: 'like',
        templateUrl: './like.component.html',
        styleUrls: ['./like.component.css']
    })
], LikeComponent);
export { LikeComponent };
//# sourceMappingURL=like.component.js.map