import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Nav1ViewComponent } from '../../view/nav1-view/nav1-view.component';
import { BannerViewComponent } from '../../view/banner-view/banner-view.component';
import { ShopViewComponent } from '../../view/shop-view/shop-view.component';
import { JournalViewComponent } from '../../view/journal-view/journal-view.component';
import { LatestBlogViewComponent } from '../../view/latest-blog-view/latest-blog-view.component';

import { AppRoutes } from '../../app.routing';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css',
  				'../../app.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
