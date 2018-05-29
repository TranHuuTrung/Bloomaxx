import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/';
import { map } from 'rxjs/operators';
@Injectable()
export class UserService {

  private storageSub = new Subject<any>();
  private storageSubPermission = new Subject<any>();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
  ) { }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  watchPermissionStorage(): Observable<any> {
    return this.storageSubPermission.asObservable();
  }

  login(userName: string, password: string): Observable<any> {
    const url = `/login`;
    return this.apiService.post(url, {
      'username': userName,
      'password': password
    });
  
  }

}
