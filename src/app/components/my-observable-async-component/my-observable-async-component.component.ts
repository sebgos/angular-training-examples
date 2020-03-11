import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-my-observable-async-component',
  templateUrl: './my-observable-async-component.component.html',
  styleUrls: ['./my-observable-async-component.component.css']
})
export class MyObservableAsyncComponentComponent {

  message$: Observable<string>;

  private messages = [
    'Connecting.',
    'Connecting..',
    'Connecting...',
    'Authorization in progress',
    'You are logged in'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(1500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

}
