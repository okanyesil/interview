import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './navbar-container/navbar-container.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    NavbarContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ NavbarContainerComponent ]
})
export class NavbarModule { }
