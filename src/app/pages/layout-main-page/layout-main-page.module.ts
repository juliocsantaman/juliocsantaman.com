import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainPageComponent } from './layout-main-page.component';
import { HomePageModule } from '../home-page/home-page.module';


@NgModule({
  declarations: [
    LayoutMainPageComponent
  ],
  imports: [
    CommonModule,
    HomePageModule
  ],
  exports: [
    LayoutMainPageComponent
  ]
})
export class LayoutMainPageModule { }
