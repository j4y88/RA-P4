import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import promise
import 'rxjs/add/operator/toPromise';

//import models
import { Blog } from '../model/blog';
import { BlogList } from '../model/blog-list';

@Injectable()
export class BlogService {
  proxyUrl = 'http://www.edapostol.com/proxy/proxy.php?url=';
  blogsUrl = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/';

  constructor(private http: Http) { }

  getBlogs(): Promise<Blog[]> {
    /* 
    const getTheData = this.http.get(this.blogsUrl);
    //console.log(getTheData);
    let newPromise: any = getTheData.toPromise();
    console.log(newPromise);
    let successFn: Function = (response) => {
      let blogList: BlogList = response.json();
      //console.log(blogList);
      let allBlogs = blogList.blogs;
      //console.log(allBlogs);

      return allBlogs;
    };
    newPromise.then(successFn).catch(this.handleError);
    */

    let newPromise: any =  
    this.http.get(this.blogsUrl)
    .toPromise()
    .then( resp => {return resp.json(); } )
    .catch( err => {console.log(err)} );
    return newPromise;
  }

  handleError(error) {
    console.log(error);
  }
}