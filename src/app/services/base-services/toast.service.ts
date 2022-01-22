import { Injectable, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  @Output() addMessage: EventEmitter<any> = new EventEmitter();
  constructor() { }

  showMessage(content, style) {
    const message = new Message(content, style)
    this.addMessage.emit(message)
  }
}
