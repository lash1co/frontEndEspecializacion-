import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from '../../services/base-services/toast.service';
import { Message } from '../../models/message.model';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Subscription } from 'rxjs';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class ToastMessagesComponent implements OnInit, OnDestroy {

  
  messages: Message[]
  subscription: Subscription

  constructor(private toast: ToastService) { 
    this.messages = []
  }

  ngOnInit() {
    this.subscription = this.toast.addMessage.subscribe(message => {
      this.messages.push(message)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
