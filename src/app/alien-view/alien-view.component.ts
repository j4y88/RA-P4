import { Component, OnInit } from '@angular/core';

import { AlienHorde } from '../model/alien-horde';
import { Alien } from '../model/alien'

//import service

import { AlienServiceService } from '../services/alien-service.service'


@Component({
  selector: 'app-alien-view',
  templateUrl: './alien-view.component.html',
  styleUrls: ['./alien-view.component.css']
})
export class AlienViewComponent implements OnInit {
  currentAlien:Alien;
  alienHorde:AlienHorde;

  constructor(private alienService: AlienServiceService) {
    //console.log('creating alienView component');
  }

  ngOnInit(): void {
    
    console.log('initializing AlienView');
    let myPromiseOfAliens: any = this.alienService.getAliens();
    console.log(myPromiseOfAliens);
   
    const extractDataFromPromise: Function = (response) => {
     console.log("extract handler");
     console.log(response);
     let myHorde:AlienHorde = <AlienHorde>response as AlienHorde;
     let myData = myHorde.aliens;
     console.log(myData);
     let newHorde = new AlienHorde();
     for (let x = 0 ; x < myData.length; x++){
       let newAlien = new Alien();
       newAlien.type = myData[x]['type'];
       newAlien.description = myData[x]['description'];
       newAlien.submitted_by = myData[x]['submitted_by'];
       newAlien.id = myData[x]['id'];
       newHorde.aliens[x] = newAlien;
     }

     console.log(newHorde);
     this.alienHorde = newHorde;

    }
    
    myPromiseOfAliens.then(extractDataFromPromise).catch(this.onDataError);

  }

  onDataError(error){
    //console.log(error);
  }

}
