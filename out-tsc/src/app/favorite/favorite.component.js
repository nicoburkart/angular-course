import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FavoriteComponent = class FavoriteComponent {
    constructor() {
        this.imgUrlPrefix = "../../assets/bootstrap-icons/icons/";
        this.imgUrl = this.imgUrlPrefix + "star.svg";
        this.change = new EventEmitter();
    }
    getImgUrl() {
        this.imgUrl = this.imgUrlPrefix;
        this.imgUrl += this.isFavorite ? "star-fill.svg" : "star.svg";
        return this.imgUrl;
    }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
        this.imgUrl = this.imgUrlPrefix;
        this.imgUrl += this.isFavorite ? "star-fill.svg" : "star.svg";
    }
    ngOnInit() {
    }
};
__decorate([
    Input('isFavorite')
], FavoriteComponent.prototype, "isFavorite", void 0);
__decorate([
    Output('change')
], FavoriteComponent.prototype, "change", void 0);
FavoriteComponent = __decorate([
    Component({
        selector: 'favorite',
        templateUrl: './favorite.component.html',
        styleUrls: ['./favorite.component.css']
    })
], FavoriteComponent);
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map