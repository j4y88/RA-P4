import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { JournalList } from '../../model/journal-list';
import { Journal } from '../../model/journal';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css',
  						'../../app.component.css']
})

export class ArticleViewComponent implements OnInit {
  currentJournal:Journal;
  journalList:JournalList;
  target: any;
  idValue: number;
  titleValue: string;
  contentValue: string;
  categoriesValue: Array<string>;
  imageValue: string;
  dateValue: string;
  authorValue: string;
 
  constructor(
    private journalService: JournalService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    let myPromiseOfBlogs: any = this.journalService.getJournals();

    const extractDataFromPromise: Function = (response) => {
      let myList:JournalList = <JournalList>response as JournalList;
      let myData = myList;
      let newList = new JournalList();
      for (let x = 0 ; x < myData.count; x++){
        if (myData[x]!=='count'){
          let newJournal = new Journal();
          newJournal.ID = myData[x]['ID'];
          newJournal.title = (myData[x]['title'].replace(/&#039;/g, `'`));
          newJournal.content = (myData[x]['content'].replace(/&#039;/g, `'`));
          newJournal.categories = myData[x]['categories'];
          newJournal.image = myData[x]['image'];
          newJournal.date = myData[x]['date'];
          newJournal.author = myData[x]['author'];
          newList.journals[x] = newJournal;
        }
      newList.count=myData.count;
      }
      this.journalList = newList;

      this.getArticle(this.journalList);
    }
    
    this.route.params.subscribe(params => this.storeTheId(params['ID']));
    myPromiseOfBlogs.then(extractDataFromPromise).catch(this.onDataError);
   
  }
  storeTheId(ID:number):any{
    this.idValue = ID;
  }

  getArticle(journalList: JournalList): void {
    for (let i=0; i<this.journalList.count; i++) {
      if (this.idValue == this.journalList.journals[i].ID) {
        this.idValue = this.journalList.journals[i].ID;
        this.titleValue = this.journalList.journals[i].title;
        this.contentValue = this.journalList.journals[i].content;
        this.categoriesValue = this.journalList.journals[i].categories;
        this.imageValue = this.journalList.journals[i].image;
        this.dateValue = this.journalList.journals[i].date;
        this.authorValue = this.journalList.journals[i].author;
      }
    }
  }
  onDataError(error){
    //console.log(error);
  }
}
//this.journalService.getJournal(+params['id']))