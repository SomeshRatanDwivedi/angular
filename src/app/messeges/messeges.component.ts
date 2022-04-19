import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-messeges',
  templateUrl: './messeges.component.html',
  styleUrls: ['./messeges.component.css']
})
export class MessegesComponent implements OnInit {
  @ Input() message?:Hero;
  constructor() {

  }

  ngOnInit(): void {
  }

}
