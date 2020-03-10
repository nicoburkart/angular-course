import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PostsComponent = class PostsComponent {
    constructor(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        http.get(this.url)
            .subscribe(response => {
            let res = response;
            this.posts = res;
            console.log(this.posts);
        });
    }
    createPost(input) {
        let post = { title: input.value };
        console.log("im called");
        this.http.post(this.url, JSON.stringify(post))
            .subscribe(response => {
            console.log(response);
        });
    }
};
PostsComponent = __decorate([
    Component({
        selector: 'posts',
        templateUrl: './posts.component.html',
        styleUrls: ['./posts.component.css']
    })
], PostsComponent);
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map