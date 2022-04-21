import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  sendMessage(): void {
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessages(): void {
      this.messageService.clearMessages();
  }
   ngOnInit(): void {
     
   }
}
