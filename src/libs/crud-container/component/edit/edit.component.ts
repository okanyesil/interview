import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../../models/user.model';
import { DeliverUpdateValueService } from '../../services/deliver-update-value.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

 // Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$') -- Email
  addForm = this.fb.group({
    id: [<number>0],
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    website: ["", [Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?") ]],
    address: this.fb.group({
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      geo: this.fb.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required]
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
    private snackBar: MatSnackBar,
    private deliverDataService: DeliverUpdateValueService
  ) { }

  ngOnInit(): void {
    this.deliverDataService.reciveMessage().subscribe(value => {
      this.addForm.patchValue(value);
    });
    
    
    
  }
  onSubmit(){
    this.userService.addNewUser(<UserModel>this.addForm.getRawValue()).subscribe((value) => {
      this.deliverDataService.sendEditedValue(<UserModel>value);
      this.snackBar.open('New user added correctly', 'close');
    });
  }
  updateUserInfo()
  {
    this.userService.updateUserInfo(<UserModel>this.addForm.getRawValue()).subscribe((value) => {
      this.deliverDataService.sendEditedValue(<UserModel>value);
      //console.log(value);
    });
  }

  clear(){
    this.addForm.reset();
  }
}
