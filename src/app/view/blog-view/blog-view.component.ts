import { Component, OnInit } from '@angular/core';

import { BlogList } from '../../model/blog-list';
import { Blog } from '../../model/blog'

//import service

import { BlogService } from '../../services/blog.service'


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css', 
              '../../../../node_modules/font-awesome/css/font-awesome.css']
})
export class BlogViewComponent implements OnInit {
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
        newBlog.image = myData[x]['image'];
        newBlog.date = myData[x]['date'];
        newBlog.author = myData[x]['author'];
        newList.blogs[x] = newBlog;
      }
    newList.count=myData.count;
    }
    this.blogList = newList;
    console.log(this.blogList);
    }
    myPromiseOfBlogs.then(extractDataFromPromise).catch(this.onDataError);
  }
  onDataError(error){
    //console.log(error);
  }
}
