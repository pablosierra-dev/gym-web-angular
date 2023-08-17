import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '17.auth';
  constructor(private api: AuthService){}
  ngOnInit(): void {
    this.api.checkSession().subscribe(data => {
      console.log(data)
    })
  }
}
