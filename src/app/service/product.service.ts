import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getSupplierNames(): Observable<any> {
    return this.http.get('http://localhost/getSupplierNameList.php');
  }
}
