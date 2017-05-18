import { Blog } from './blog';

export class BlogList {

  blogs: Blog [];
  count: number;

  constructor(blogs:Blog[] = [], count:number=0){
    this.blogs = blogs;
   	this.count = count;
  }
}