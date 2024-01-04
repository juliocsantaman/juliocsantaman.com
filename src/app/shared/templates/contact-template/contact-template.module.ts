import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactTemplateComponent } from './contact-template.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ContactTemplateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ContactTemplateComponent
  ]
})
export class ContactTemplateModule { }
