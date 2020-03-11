import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  date: number;
  price: number;
  password: string;
  active: boolean;
  constructor() { }

  ngOnInit(): void {
    this.date = 1512118800000;
    this.price = 100.259101;
    this.password = 'qwerty';
    this.active = true;
  }

}
