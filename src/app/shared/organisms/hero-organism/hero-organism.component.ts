import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-organism',
  templateUrl: './hero-organism.component.html',
  styleUrls: ['./hero-organism.component.scss']
})
export class HeroOrganismComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

