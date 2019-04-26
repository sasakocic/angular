import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatViewComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
