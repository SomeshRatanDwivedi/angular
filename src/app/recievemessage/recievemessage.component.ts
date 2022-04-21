import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-recievemessage',
  templateUrl: './recievemessage.component.html',
  styleUrls: ['./recievemessage.component.css']
})
export class RecievemessageComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => {
        if (message) {
          this.messages.push(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });
  }


  ngOnInit(): void {
  }

}
