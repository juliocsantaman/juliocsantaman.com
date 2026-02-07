import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeroOrganismModule } from '../../organisms/hero-organism/hero-organism.module';
import { AboutOrganismModule } from '../../organisms/about-organism/about-organism.module';
import { TechnologiesOrganismModule } from '../../organisms/technologies-organism/technologies-organism.module';
import { ProjectsOrganismModule } from '../../organisms/projects-organism/projects-organisms.module';
import { ContactOrganismModule } from '../../organisms/contact-organism/contact-organism.module';

@NgModule({
  declarations: [
    HomeTemplateComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HeroOrganismModule,
    AboutOrganismModule,
    TechnologiesOrganismModule,
    ProjectsOrganismModule,
    ContactOrganismModule
  ],
  exports: [
    HomeTemplateComponent
  ]
})
export class HomeTemplateModule { }
