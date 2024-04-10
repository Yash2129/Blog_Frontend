import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = "http://127.0.0.1:8080/api";  // To get server name

  constructor(private http: HttpClient, private authService: AuthService) {}

  // To handle the custom exception
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred.';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }
    return throwError(errorMessage);
  }

//   // To update the status of the order
//   UpdateOrderStatus(newStatus: any, orderId: any): Observable<any> {
//     return this.http.put<any>(this.serverName+'/api/supplier/order/update/'+orderId+'?newStatus='+newStatus,{})
//       .pipe(catchError(this.handleError));
//   }

  // To add the equipment for the particular hospital
  //   // To schedule the maintenance for the particular equipment
//   scheduleMaintenance(details: any, equipmentId: any): Observable<any> {
//     return this.http.post(`${this.serverName}/api/hospital/maintenance/schedule?equipmentId=${equipmentId}`, details).pipe(catchError(this.handleError));
//   }



  // To login the user
  Login(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/users/login`, details).pipe(catchError(this.handleError));
  }

  // To register new user
  registerUser(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/users/register`, details).pipe(catchError(this.handleError));
  }
}