import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  checkCredentials(data:any): Observable<any> {
    return this.http.post('http://localhost/fetchLoginData.php',data, { responseType: 'json' });
  }

  getLoginDetails(): Observable<any>  {
    return this.http.get('http://localhost/loginDetails.php', {responseType:'json'});
  }
}
