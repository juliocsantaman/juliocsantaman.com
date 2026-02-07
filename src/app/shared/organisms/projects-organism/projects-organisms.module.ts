import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsOrganismComponent } from './projects-organism.component';


@NgModule({
  declarations: [
    ProjectsOrganismComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ProjectsOrganismComponent
  ]
})
export class ProjectsOrganismModule { }
