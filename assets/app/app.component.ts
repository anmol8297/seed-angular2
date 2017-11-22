import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component'
import { Message } from './messages/message.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: Message = new Message('Message', 'Anmol');
}