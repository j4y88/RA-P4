import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import models
import { Journal } from '../model/journal';
import { JournalList } from '../model/journal-list';

@Injectable()
export class JournalService {
  proxyUrl = 'https://www.edapostol.com/proxy/proxy.php?url=';
  journalsUrl = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/';
  finalUrl = this.proxyUrl + this.journalsUrl;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getJournals(): Promise<Journal[]> {
    /* Normal Server
    let newPromise: any =  
    this.http.get(this.journalsUrl)
    .toPromise()
    .then( response => {console.log(response.json()); return response.json(); } )
    .catch( error => {console.log(error)} );
    console.log(newPromise);
    /*/

    //* Proxy Server
    let newPromise: any =  
    this.http.get(this.finalUrl)
    .toPromise()
    .then( response => {console.log(response.json()); return Promise.resolve(response.json().contents); } )
    .catch( error => {console.log(error)} );
    console.log(newPromise);
    //*/

    return newPromise;
  }

  getJournal(id: number): Promise<Journal> {
    return this.getJournals()
    .then(journals => journals
    .find(journal => journal.ID == id));
  }

  createJournal(journal) {
    let postUrl = 'http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2?params=' + journal;
    console.log(postUrl);
    return this.http
      .post(postUrl, Option)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
    return Promise.reject(error.message || error)
  }
  jsSerializeArray(form) {
    let field: any;
    let numberOfOptions = 0;
    let s: Array<any> = [];
    if (typeof form === 'object') {
      let len: number = form.elements.length;
      for (let i = 0; i < len; i++) {
        field = form.elements[i];
        let fieldName = field.name;
        let isFieldDisabled: Boolean = field.disabled;
        let fieldType = field.type;
        let fieldValue = field.value;
        if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
          if (field.type === 'select-multiple') {
            let newField = '';
            numberOfOptions  = form.elements[i].options.length;
            let currentFormLength = s.length;
            for (let j = 0; j < numberOfOptions; j++) {
              if (field.options[j].selected) {
                newField = newField + `${field.options[j].value},`;
                s[currentFormLength] = { name: field.name, value: newField };
              }
            }
            s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);
          } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
            s[s.length] = { name: fieldName, value: fieldValue };
          }
        }
      }
    }
    return s;
  }
}