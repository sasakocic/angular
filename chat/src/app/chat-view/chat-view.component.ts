import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ChatMessage } from '../chat-message.model';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  messages: ChatMessage[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }
}
