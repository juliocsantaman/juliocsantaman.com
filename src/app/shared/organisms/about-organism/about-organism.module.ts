import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboutOrganismComponent } from './about-organism.component';


@NgModule({
  declarations: [
    AboutOrganismComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    AboutOrganismComponent
  ]
})
export class AboutOrganismModule { }
