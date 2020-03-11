import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training-examples';
  showWarning: boolean;

  doShowWarning() {
      this.showWarning = !this.showWarning;
  }
}
