import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);

    this.accountService.accountsChanged.subscribe(
      (accounts: Account[]) => this.accounts = accounts
    )
  }

}
