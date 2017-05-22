import { Component } from '@angular/core';
import { PostJournal } from '../../model/post-journal';
import { Journal } from '../../model/journal';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css',
  						'../../app.component.css']
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

  submitForm(jform: Journal) {
    this.jform.author=this.jform.author.trim();
    this.jform.content=this.jform.content.trim();
  	console.log(jform);
 		alert(JSON.stringify(jform));
    let newForm = this.journalService.jsSerializeArray(jform);
    console.log(newForm);
 }
}
