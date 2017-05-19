import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';

import { BlogService } from './services/blog.service';
import { Nav1ViewComponent } from './view/nav1-view/nav1-view.component';
import { BannerViewComponent } from './view/banner-view/banner-view.component';
import { ShopViewComponent } from './view/shop-view/shop-view.component';
import { JournalViewComponent } from './view/journal-view/journal-view.component';
import { LatestBlogViewComponent } from './view/latest-blog-view/latest-blog-view.component';
import { FooterViewComponent } from './view/footer-view/footer-view.component';

import { BlogViewComponent } from './view/blog-view/blog-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { Nav2ViewComponent } from './view/nav2-view/nav2-view.component';
import { ArticleViewComponent } from './view/article-view/article-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    LatestBlogViewComponent,
    FooterViewComponent,
    JournalViewComponent,
    ShopViewComponent,
    BannerViewComponent,
    Nav1ViewComponent,
    HomeViewComponent,
    Nav2ViewComponent,
    ArticleViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
