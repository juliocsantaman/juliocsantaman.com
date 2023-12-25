import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeTemplateModule } from 'src/app/shared/templates/home-template/home-template.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
