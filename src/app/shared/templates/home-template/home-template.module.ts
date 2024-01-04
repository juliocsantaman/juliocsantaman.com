import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeTemplateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HomeTemplateComponent
  ]
})
export class HomeTemplateModule { }
