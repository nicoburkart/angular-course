import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-course';
        this.post = {
            title: "Title",
            isFavorite: true
        };
        this.likePost = {
            likes: 10,
            isSelected: true
        };
        this.items = ["nico", "jonas", "magali", "ulas", "dennis", "japhet"];
    }
    onFavoriteChanged(eventArgs) {
        console.log("favorite changed. Selected: ", eventArgs.newValue);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map