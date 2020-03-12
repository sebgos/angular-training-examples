import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './account.service';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggerService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
