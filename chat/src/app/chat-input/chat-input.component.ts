import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  messageInput: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  insertToChat() {
    this.chatService.insert(this.messageInput);
  }

}
