import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, first, from, map, mergeMap, Observable, single, take, tap, toArray } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { DeliverUpdateValueService } from '../../services/deliver-update-value.service';
import { UserService } from '../../services/user.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allUsers$: Observable<UserModel[]> = new Observable<UserModel[]>();
  selectedUser: UserModel = <UserModel>{};
  constructor(
    private userService: UserService,
    private deliverDataService: DeliverUpdateValueService
  ) { }



  ngOnInit(): void {
    this.allUsers$ = this.userService.getAllUser();
    this.deliverDataService.reviceEditedValue().subscribe((val) => {
      if(!!val.id){
        this.allUsers$.pipe(map(value => value.filter(v => {
          return v.id != val.id;
        }))).subscribe(value => {
          var newArray = [...value];
          newArray.push(val);
          newArray.sort((a,b) => a.id - b.id);
        this.allUsers$ =  from([newArray]);
        });
      }
      
    });
  }

  sendMessage(va: number)
  {
    this.allUsers$.pipe(map(value => {

      return value.filter(v => v.id == +va);
    })).subscribe(value => {
      this.selectedUser = value[0];
      this.deliverDataService.sendMessage(this.selectedUser);
    });
    
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(_ => {
      this.allUsers$.pipe(map(value => value.filter(v => {
        return v.id != id;
      }))).subscribe(value => {
        this.allUsers$ = from([value]);
      });
    });
  }



}
