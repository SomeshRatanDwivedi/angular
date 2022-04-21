import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@ Input() hero:any;
  constructor() { }

  ngOnInit(): void {
  }

}
