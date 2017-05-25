import { Component , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { PostJournal } from '../../model/post-journal';
import { Journal } from '../../model/journal';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css','../../../../node_modules/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None
})

export class JournalFormComponent {
	send = JournalService;
  jform: Journal = {
    ID: 1,
		title: '',
		content: '',
		categories: [],
		image: '',
		date: '',
		author: '',
  };

  constructor(private journalService: JournalService, private router: Router){}

  submitForm(e:any) {
    const theForm = (e.target as HTMLButtonElement).parentElement;
    const serializedForm = this.journalService.jsSerializeArray(theForm);
    const formData = JSON.stringify(serializedForm);
    const postThisJournal = this.journalService.createJournal(formData);
    alert('Journal Sent!');
    this.router.navigate(['/journal']);
  }
}
