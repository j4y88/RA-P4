import { Alien } from './alien';

export class AlienHorde {

  aliens: Alien[];

  constructor(aliens:Alien[] = []){
    this.aliens = aliens;
  }
}