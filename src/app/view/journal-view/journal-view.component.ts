import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { JournalList } from '../../model/journal-list';
import { Journal } from '../../model/journal';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css','../../../../node_modules/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None
})

export class JournalViewComponent implements OnInit {
  currentJournal:Journal;
  journalList:JournalList;

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
        newJournal.title = (myData[x]['title'].replace(/&#039;/g, `'`).replace(/&#8230;/g, `...`));
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
    console.log(this.journalList);
    }
    myPromiseOfBlogs.then(extractDataFromPromise).catch(this.onDataError);
  }
  onDataError(error){
    //console.log(error);
  }
}