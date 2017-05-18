import { Component, OnInit } from '@angular/core';
import { BlogViewComponent } from '../blog-view/blog-view.component';

import { BlogList } from '../../model/blog-list';
import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-latest-blog-view',
  templateUrl: './latest-blog-view.component.html',
  styleUrls: ['./latest-blog-view.component.css']
})

export class LatestBlogViewComponent implements OnInit {
  currentBlog:Blog;
  blogList:BlogList;

  constructor(private blogService: BlogService) {
    //console.log('creating blogView component');
  }

  ngOnInit(): void {
    let myPromiseOfBlogs: any = this.blogService.getBlogs();
    const extractDataFromPromise: Function = (response) => {
    let myList:BlogList = <BlogList>response as BlogList;
    let myData = myList;
    let newList = new BlogList();
    for (let x = 0 ; x < myData.count; x++){
      if (myData[x]!=='count'){
        let newBlog = new Blog();
        newBlog.ID = myData[x]['ID'];
        newBlog.title = myData[x]['title'];
        newBlog.content = (myData[x]['content'].replace(/&#039;/g, `'`));
        newBlog.categories = myData[x]['categories'];
        newBlog.images = myData[x]['images'];
        newBlog.date = myData[x]['date'];
        newBlog.author = myData[x]['author'];
        newList.blogs[x] = newBlog;
      }
    newList.count=myData.count;
    }
    this.blogList = newList;
    }
    myPromiseOfBlogs.then(extractDataFromPromise).catch(this.onDataError);
  }
  onDataError(error){
    //console.log(error);
  }
}
