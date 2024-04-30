import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  userId: number = 0;

  constructor(private http: HttpClient) { }

  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number | null {
    return this.userId;
  }

  checkCredentials(data:any): Observable<any> {
    return this.http.post('http://localhost/fetchLoginData.php',data, { responseType: 'json' });
  }

  getLoggedInUserDetails(userId: number): Observable<any> {
    return this.http.get(`http://localhost/loginDetails.php?id=${userId}`);
  }

}
