import { Injectable } from '@angular/core';
import { ChatMessage } from './chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: ChatMessage[] = [
    new ChatMessage('Hello'),
    new ChatMessage('Hi'),
  ];

  constructor() { }

  getMessages() {
    return this.messages;
  }

  insert(message: string) {
    this.messages.push(new ChatMessage(message));
  }
}
