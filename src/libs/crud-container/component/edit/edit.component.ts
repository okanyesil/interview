import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  addForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    website: ["", [Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?") ]],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: [''],
      geo: this.fb.group({
        lat: [''],
        lng: ['']
      })
    }),
    company: this.fb.group({
      name: ["", Validators.required],
      catchPhrase: ["", Validators.required],
      bs: ["", Validators.required]
    })
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.userService.addNewUser(<UserModel>this.addForm.getRawValue()).subscribe(() => {
      this.snackBar.open('New user added correctly', 'close');
    });
  }

}
