import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { HeaderOrganismModule } from '../../organisms/header-organism/header-organism.module';


@NgModule({
  declarations: [
    HomeTemplateComponent
  ],
  imports: [
    CommonModule,
    HeaderOrganismModule
  ],
  exports: [
    HomeTemplateComponent
  ]
})
export class HomeTemplateModule { }
