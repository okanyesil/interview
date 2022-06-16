import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContainerComponent } from './crud-container/crud-container.component';

const routes: Routes = [
  {
    path: '', component: CrudContainerComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudContainerRouterModule { }
