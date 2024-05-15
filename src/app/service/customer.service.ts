import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveCustomerForm(data: any): Observable<any> {
    return this.http.post('http://localhost/saveCustomerFormDetails.php',data,{responseType:'json'});
  }

  getCustomerFormData(): Observable<any> {
    return this.http.get('http://localhost/getCompanyContactDetails.php');
  }

  deleteCompanyData(companyId: number): Observable<any> {
    return this.http.post('http://localhost/deleteCompanyContactDetails.php',{id: companyId},{responseType:'json'});
  }

  updateCompanyData(data: any):Observable<any> {
    return this.http.post('http://localhost/updateCompanyContactDetails.php',data,{responseType:'json'});
  }

  getCompanyDetailsById(id: number): Observable<any> {
    return this.http.get(`http://localhost/getCompanyContactDetailsById.php?companyId=${id}`);
  }
}
