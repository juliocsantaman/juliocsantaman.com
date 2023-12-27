import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainPageComponent } from './layout-main-page.component';
import { HomePageModule } from '../home-page/home-page.module';
import { ContactPageModule } from '../contact-page/contact-page.module';
import { HeaderOrganismModule } from 'src/app/shared/organisms/header-organism/header-organism.module';
import { FooterOrganismModule } from 'src/app/shared/organisms/footer-organism/footer-organism.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutMainPageComponent
  ],
  imports: [
    CommonModule,
    HomePageModule,
    ContactPageModule,
    HeaderOrganismModule,
    FooterOrganismModule,
    RouterModule
  ],
  exports: [
    LayoutMainPageComponent
  ]
})
export class LayoutMainPageModule { }
