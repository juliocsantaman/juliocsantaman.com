import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeroOrganismModule } from '../../organisms/hero-organism/hero-organism.module';

@NgModule({
  declarations: [
    HomeTemplateComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HeroOrganismModule
  ],
  exports: [
    HomeTemplateComponent
  ]
})
export class HomeTemplateModule { }
