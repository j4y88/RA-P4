import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import promise
import 'rxjs/add/operator/toPromise';

//import models
import { Alien } from '../model/alien';
import { AlienHorde } from '../model/alien-horde';

@Injectable()
export class AlienServiceService {

  aliensUrl = "https://red-wdp-api.herokuapp.com/api/mars/aliens";

  constructor(private http: Http) { }

  getAliens(): Promise<Alien[]> {
    console.log('in getAliens() method of AlienServiceService');

    /* 
    const getTheData = this.http.get(this.aliensUrl);
    //console.log(getTheData);
    let newPromise: any = getTheData.toPromise();
    console.log(newPromise);
    let successFn: Function = (response) => {
      let alienHorde: AlienHorde = response.json();
      //console.log(alienHorde);
      let allAliens = alienHorde.aliens;
      //console.log(allAliens);

      return allAliens;
    };

    newPromise.then(successFn).catch(this.handleError);

    */

    let newPromise: any =  
    this.http.get(this.aliensUrl)
    .toPromise()
    .then( resp => { return resp.json(); } )
    .catch( err => {console.log(err)} );
     
    return newPromise;
  }

  handleError(error) {
    console.log(error);
  }
}