import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  token = 'c99ca08a0e24d17e659481cffe2b72ddd3c1ec86c90821a6b05413171fdf8ea9';

  getUsers(): Observable<any> {
    const url = `https://gorest.co.in/public/v2/users?access-token=${this.token}`;
    return this.http.get(url);
  }

  getUserById(id: number): Observable<any> {
    const url = `https://gorest.co.in/public/v2/users/${id}?access-token=${this.token}`;
    return this.http.get(url);
  }
}
