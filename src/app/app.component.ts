import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  account: any;

  ngOnInit(): void {
    const storage = sessionStorage.getItem('login');
    if (storage) {
      this.account = JSON.parse(storage);
    }
  }

  onLogout(): void {
    sessionStorage.clear();
    location.assign('/');
  }
}
