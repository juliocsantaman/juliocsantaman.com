import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOrganismComponent } from './header-organism.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderOrganismComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HeaderOrganismComponent
  ]
})
export class HeaderOrganismModule { }
