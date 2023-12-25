import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { HeaderOrganismModule } from '../../organisms/header-organism/header-organism.module';
import { FooterOrganismModule } from '../../organisms/footer-organism/footer-organism.module';


@NgModule({
  declarations: [
    HomeTemplateComponent
  ],
  imports: [
    CommonModule,
    HeaderOrganismModule,
    FooterOrganismModule
  ],
  exports: [
    HomeTemplateComponent
  ]
})
export class HomeTemplateModule { }
