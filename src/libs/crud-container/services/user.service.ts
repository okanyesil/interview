import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  getAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.apiUrl);
  }

  addNewUser(userInfo: UserModel) {
    return this.http.post(environment.apiUrl, userInfo);
  }
}
