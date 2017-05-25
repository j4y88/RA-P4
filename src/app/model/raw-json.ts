import { JournalList } from './journal-list';

export class RawJson {

  journalsList: JournalList[];
  status: number;

  constructor(journalList:JournalList[] = [], status:number=0){
    this.journalsList = journalList;
   	this.status = status;
  }
}