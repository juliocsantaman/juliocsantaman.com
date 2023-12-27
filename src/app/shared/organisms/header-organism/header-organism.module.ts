import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOrganismComponent } from './header-organism.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderOrganismComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderOrganismComponent
  ]
})
export class HeaderOrganismModule { }
