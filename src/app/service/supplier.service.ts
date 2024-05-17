import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  add(arg0: { severity: string; summary: string; life: number; }) {
    throw new Error('Method not implemented.');
  }
  suppliercompanyInfo() {
    throw new Error('Method not implemented.');
  }
  suppliercontactinfo(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  saveSupplierDetails(data: any):Observable<any> {
    return this.http.post('http://localhost/saveSupplierFormDetails.php',data, {responseType:'json'});
  }

  getSupplierFormData(): Observable<any> {
    return this.http.get('http://localhost/getSupplierContactDetails.php');
  }

  deleteSupplierDetails(id: number):Observable<any> {
    return this.http.post('http://localhost/deleteSupplierContactDetails.php',{id: id}, {responseType:'json'});
  }

  getSupplierDetailsById(id: number): Observable<any> {
    return this.http.get(`http://localhost/getSupplierDetailsById.php?supplierId=${id}`);
  }

  updateSupplierDetails(data: any): Observable<any> {
    return this.http.post('http://localhost/updateSupplierContactDetails.php',data,{responseType:'json'});
  }

  }

