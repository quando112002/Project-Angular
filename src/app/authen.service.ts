import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  url = 'http://localhost:3001/api/auth/';
  token: string | null = null;
  username: string | null = null;
  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;

  }
  getToken() {
    return this.token;
  }
  signIn(email: string, pass: string) {
    return this.http.post(this.url + 'login', {
      email: email,
      password: pass,
    });
  }
  signUp(email: string, pass: string, username: string) {
    return this.http.post(this.url + 'register', {
      email: email,
      password: pass,
      username: username,
    });
  }
}
