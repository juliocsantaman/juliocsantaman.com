import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TechnologiesOrganismComponent } from './technologies-organism.component';


@NgModule({
  declarations: [
    TechnologiesOrganismComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TechnologiesOrganismComponent
  ]
})
export class TechnologiesOrganismModule { }
