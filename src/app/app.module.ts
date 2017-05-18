import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogViewComponent } from './view/blog-view/blog-view.component';

import { BlogService } from './services/blog.service';
import { LatestBlogViewComponent } from './view/latest-blog-view/latest-blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    LatestBlogViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
