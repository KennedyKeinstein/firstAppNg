import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes, query, stagger  } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style( {opacity: 0 } ), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style( { opacity: 0, transform: 'translateY(-75%)', offset: 0} ),
            style( { opacity: .5, transform: 'translateY(35px)', offset: .3} ),
            style( { opacity: 1, transform: 'translateY(0)', offset: 1} )
          ]) )
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style( { opacity: 1, transform: 'translateY(0)', offset: 0} ),
            style( { opacity: .5, transform: 'translateY(35px)', offset: .3} ),
            style( { opacity: 0, transform: 'translateY(-75%)', offset: 1} )
          ]) )
        ]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnTxt = 'Ajouter à la liste';
  goalTxt = 'Mon prémier but';
  goals = [];

  constructor(  private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe( res => this.goals = res );
    this.itemCount = this.goals.length;
    this._data.changeGoal( this.goals );
  }

  addItem() {
    if ( this.goalTxt !== '' ) {
      this.goals.push( this.goalTxt );
      this.goalTxt = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal( this.goals );
    }
  }

  deleteItem( i: number) {
    this.goals.splice(i, 1);
    this._data.changeGoal( this.goals );
    this.itemCount = this.goals.length;
  }

}
