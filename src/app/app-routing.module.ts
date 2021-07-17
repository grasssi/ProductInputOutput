import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildProductComponent } from './child-product/child-product.component';
import { ParentProductComponent } from './parent-product/parent-product.component';
const routes: Routes = [
  {
    path: 'childProduct',
    component:ChildProductComponent
  },
  {
    path: 'parentProduct',
    component:ParentProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
