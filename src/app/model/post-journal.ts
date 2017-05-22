import { PostValue } from './post-value';

export class PostJournal {

  post: PostValue [];

  constructor(post:PostValue[] = []){
    this.post = post;
  }
}