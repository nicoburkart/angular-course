import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorViewComponent } from './author-view/author-view.component';

import { BlogComponent } from './blog/blog.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputTextTitleComponent } from './input-text-title/input-text-title.component';
import { MakeNounsBigPipe } from './make-nouns-big.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { ListComponent } from './list/list.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCourseFormComponent } from './udemy-course-form/udemy-course-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './services/author.service';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { GitFollowerService } from './services/git-follower.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorViewComponent,
    BlogComponent,
    SummaryPipe,
    FavoriteComponent,
    InputTextTitleComponent,
    MakeNounsBigPipe,
    BootstrapPanelComponent,
    LikeComponent,
    DirectivesComponent,
    ListComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyCourseFormComponent,
    ReactiveFormComponent,
    ResetPasswordComponent,
    PostsComponent,
    GithubFollowerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorService,
    PostService,
    GitFollowerService,
    //wherver ErrorHandler is used by default, now AppErrorHandler takes its place
    {provide : ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
