import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable(
{
  providedIn: 'root'
})
export class CustomerService {
  _baseUrl: string;
  private headers: HttpHeaders;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
    this.headers = new HttpHeaders().set('content-type', 'application/json');
  }

  getCustomers() {
    return this.http.get(this._baseUrl + 'api/customers/getCustomers');
  }

  saveCustomer(data: any) {
    return this.http.post<any>(this._baseUrl + 'api/customers/saveCustomer' , data, { headers: this.headers });
  }

  getCustomerNames() {
    this.http.get(this._baseUrl + 'api/customers/getCustomerNames');
  }

}
