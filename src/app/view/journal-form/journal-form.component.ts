import { Component } from '@angular/core';
import { PostJournal } from '../../model/post-journal';
import { Journal } from '../../model/journal';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})

export class JournalFormComponent {
	send = JournalService;
  jform: Journal = {
    ID: 1,
		title: 'Bond James Bond',
		content: 'Shaken not stirred.',
		categories: [ 'spy', 'agent', '007'],
		image: 'http://www.007.com/wp-content/uploads/2016/10/CAROUSEL.png',
		date: '',
		author: 'Penny',
  };

  constructor(private journalService: JournalService){}

  submitForm(e:any) {
    console.log((e.target as HTMLButtonElement).parentElement);
    const theForm = (e.target as HTMLButtonElement).parentElement;
    const serializedForm = this.journalService.jsSerializeArray(theForm);
    console.log(serializedForm);
    const formData = JSON.stringify(serializedForm);
    console.log(formData);
    //const dataParams = { 'params': formData };
    //console.log(dataParams);
    const postThisJournal = this.journalService.createJournal(formData);
  }
}
