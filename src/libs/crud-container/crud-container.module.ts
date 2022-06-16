import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudContainerComponent } from './crud-container/crud-container.component';
import { CrudContainerRouterModule } from './crud-container-routing.module';


// Angular Material
import {MatInputModule} from '@angular/material/input';
import { EditComponent } from './component/edit/edit.component';
import { ListComponent } from './component/list/list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    CrudContainerComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CrudContainerRouterModule,
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule
    
  ]
})
export class CrudContainerModule { }
