import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';

import { JournalService } from './services/journal.service';
import { Nav1ViewComponent } from './view/nav1-view/nav1-view.component';
import { BannerViewComponent } from './view/banner-view/banner-view.component';
import { ShopViewComponent } from './view/shop-view/shop-view.component';
import { JournalViewComponent } from './view/journal-view/journal-view.component';
import { LatestAdventureViewComponent } from './view/latest-adventure-view/latest-adventure-view.component';
import { FooterViewComponent } from './view/footer-view/footer-view.component';

import { JournalListViewComponent } from './view/journal-list-view/journal-list-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { Nav2ViewComponent } from './view/nav2-view/nav2-view.component';
import { ArticleViewComponent } from './view/article-view/article-view.component';
import { JournalFormComponent } from './view/journal-form/journal-form.component';
import { AdventureViewComponent } from './view/adventure-view/adventure-view.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalListViewComponent,
    LatestAdventureViewComponent,
    FooterViewComponent,
    JournalViewComponent,
    ShopViewComponent,
    BannerViewComponent,
    Nav1ViewComponent,
    HomeViewComponent,
    Nav2ViewComponent,
    ArticleViewComponent,
    JournalFormComponent,
    AdventureViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
