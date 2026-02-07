import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeroOrganismComponent } from './hero-organism.component';


@NgModule({
  declarations: [
    HeroOrganismComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HeroOrganismComponent
  ]
})
export class HeroOrganismModule { }
