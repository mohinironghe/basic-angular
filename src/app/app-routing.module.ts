import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';


const routes: Routes = [
  {path:'radio',component:RadioButtonComponent},
  {path:'confirmbox',component:ConfirmBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
