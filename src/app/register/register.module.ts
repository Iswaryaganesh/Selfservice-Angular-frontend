import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Acct1Component } from '../acct1/acct1.component';



@NgModule({
  declarations: [
    RegComponent,
    Acct1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule {
  
 }
