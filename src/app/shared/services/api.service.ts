import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.'
    );
  };
  
  //setHeader
  private get httpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `${this.jwtService.getToken()?this.jwtService.getToken():''}`
    });
    if (this.jwtService.getToken()) {
      headers['Authorization'] = `${this.jwtService.getToken()}`;
    }
    return {
      'headers': headers
    };
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json);
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }


  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      this.httpOptions
    )
      .pipe(
        map(data => data['result']),
        // tap(result => result['result']),
        catchError(this.handleError)
      )
  }

  postlogin(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    )
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError)
      )
  }

}
