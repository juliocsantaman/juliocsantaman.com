import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterOrganismComponent } from './footer-organism.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FooterOrganismComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FooterOrganismComponent
  ]
})
export class FooterOrganismModule { }
