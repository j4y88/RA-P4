import { Component, OnInit } from '@angular/core';

import { JournalList } from '../../model/journal-list';
import { Journal } from '../../model/journal'
import { JournalService } from '../../services/journal.service'
import { ArticleViewComponent } from '../article-view/article-view.component';

@Component({
  selector: 'app-journal-list-view',
  templateUrl: './journal-list-view.component.html',
  styleUrls: ['./journal-list-view.component.css', 
              '../../app.component.css',
              '../../../../node_modules/font-awesome/css/font-awesome.css']
})
export class JournalListViewComponent implements OnInit {
  currentJournal:Journal;
  journalList:JournalList;
  target: any;
  idValue: number;

  constructor(private journalService: JournalService) {
  }

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
    }

    myPromiseOfBlogs.then(extractDataFromPromise).catch(this.onDataError);
  }
  onDataError(error){
    //console.log(error);
  }
  onClick(event) {
    this.target = event.target;
    this.idValue = this.target.attributes.id.nodeValue;
    console.log(this.idValue);
    return this.idValue
  }

}
