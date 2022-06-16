import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DeliverUpdateValueService {

  private edit: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(<UserModel>{});
  private editedValue: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(<UserModel>{});

  constructor() { }

  sendMessage(selectedUser: UserModel)
  {
    this.edit.next(selectedUser);
  }

  reciveMessage(): Observable<UserModel>
  {
    return this.edit.asObservable();
  }
  sendEditedValue(newValue: UserModel){
    this.editedValue.next(newValue);
  }
  reviceEditedValue(): Observable<UserModel>{
    return this.editedValue.asObservable();
  }


}
