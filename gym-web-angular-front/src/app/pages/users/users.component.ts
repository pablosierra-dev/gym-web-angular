import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userData: any;

  constructor() {}

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString !== null) {
      this.userData = JSON.parse(userDataString);
      console.log(this.userData);
    }
  }
}
