import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // createCustomerDetails(data:any): Observable<any> {
  //   return this.http.post('http://localhost/customer.php',data,{responseType:'json'});
  // }

  // getCustomerDetails(): Observable<any> {
  //   return this.http.get('http://localhost/viewCustomerDetails.php');
  // }

  // deleteCustomer(id:number): Observable<any> {
  //   return this.http.post('http://localhost/deleteCustomer.php',{id:id},{responseType:'json'});
  // }

  // updateCustomer(data:any): Observable<any> {
  //   return this.http.post('http://localhost/updateCustomer.php',data,{responseType:'json'})
  // }

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
