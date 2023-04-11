import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent } from './product/product.component';
import {EditComponent} from './product/edit/edit.component';

const routes: Routes = [
  {path : 'product',component:EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
