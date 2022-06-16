import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allUsers$: Observable<UserModel[]> = new Observable<UserModel[]>();

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EditComponent, {
      width: '50%',
      height: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.allUsers$ = this.userService.getAllUser();
  }

}
