import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public redClassBool = false;
  // .Class({
  //   toggleClass:function() {
  //     this.redClassBool = !this.gn-selected;
  //   },
  // });
  constructor() { }

  ngOnInit() {
  }

}
export class HomeUsComponent {
  title = 'chandan kumar singh';
}
