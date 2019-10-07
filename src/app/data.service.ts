import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Mon prémier but c\'est d\'avoir un boulot cette année', 'Mes autres buts dans la vie...']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal( goal ) {
    this.goals.next( goal );
  }

}
