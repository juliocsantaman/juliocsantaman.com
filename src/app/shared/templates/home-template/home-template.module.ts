import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from '../../organisms/hero-organism/hero/hero.component';


@NgModule({
  declarations: [
    HomeTemplateComponent,
    HeroComponent
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
