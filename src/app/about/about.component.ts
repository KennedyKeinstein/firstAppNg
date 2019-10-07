import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService ) { }

  ngOnInit() {
    this._dataService.goal.subscribe( res => this.goals = res )
  }

  getHome() {
    this._router.navigate(['/']);
  }

}
