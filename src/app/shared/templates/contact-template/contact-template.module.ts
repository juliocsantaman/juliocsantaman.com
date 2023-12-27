import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactTemplateComponent } from './contact-template.component';



@NgModule({
  declarations: [
    ContactTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactTemplateComponent
  ]
})
export class ContactTemplateModule { }
