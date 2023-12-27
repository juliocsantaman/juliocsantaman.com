import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactTemplateModule } from 'src/app/shared/templates/contact-template/contact-template.module';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactTemplateModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactPageModule { }
