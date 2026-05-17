import { Component } from '@angular/core';

interface Technology {
  name: string;
  icon: string; // Font Awesome class
  level: 'Expert' | 'Advanced' | 'Proficient';
}

interface TechCategory {
  category: string;
  technologies: Technology[];
}

@Component({
  selector: 'app-technologies-organism',
  templateUrl: './technologies-organism.component.html',
  styleUrls: ['./technologies-organism.component.scss']
})
export class TechnologiesOrganismComponent {

  techCategories: TechCategory[] = [
    {
      category: 'ROOT.APP.ORGANISMS.TECHNOLOGIES_ORGANISM.CATEGORIES.FRONTEND',
      technologies: [
        { name: 'HTML', icon: 'fa-brands fa-html5', level: 'Expert' },
        { name: 'CSS', icon: 'fa-brands fa-css3-alt', level: 'Expert' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', level: 'Expert' },
        { name: 'Angular', icon: 'fa-brands fa-angular', level: 'Expert' },
        { name: 'Angular Material', icon: 'fa-solid fa-layer-group', level: 'Advanced' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', level: 'Advanced' },
      ],
    },
    {
      category: 'ROOT.APP.ORGANISMS.TECHNOLOGIES_ORGANISM.CATEGORIES.BACKEND',
      technologies: [
        { name: 'C#', icon: 'fa-solid fa-code', level: 'Advanced' },
        { name: '.NET', icon: 'fa-solid fa-circle-nodes', level: 'Advanced' },
        { name: 'SQL', icon: 'fa-solid fa-database', level: 'Advanced' },
        { name: 'xUnit', icon: 'fa-solid fa-vial', level: 'Advanced' },
        { name: 'Unit & Integration Testing', icon: 'fa-solid fa-flask', level: 'Advanced' },
      ],
    },
    {
      category: 'ROOT.APP.ORGANISMS.TECHNOLOGIES_ORGANISM.CATEGORIES.TOOLS',
      technologies: [
        { name: 'Git', icon: 'fa-brands fa-git-alt', level: 'Expert' },
        { name: 'GitHub', icon: 'fa-brands fa-github', level: 'Expert' },
        { name: 'GitHub Desktop', icon: 'fa-brands fa-github', level: 'Expert' },
        { name: 'Docker', icon: 'fa-brands fa-docker', level: 'Advanced' },
        { name: 'AWS', icon: 'fa-brands fa-aws', level: 'Advanced' },
        { name: 'Azure DevOps', icon: 'fa-brands fa-microsoft', level: 'Advanced' },
        { name: 'CI/CD', icon: 'fa-solid fa-infinity', level: 'Advanced' },
        { name: 'Postman', icon: 'fa-solid fa-paper-plane', level: 'Advanced' },
        { name: 'Visual Studio Code', icon: 'fa-solid fa-code', level: 'Expert' },
        { name: 'Visual Studio', icon: 'fa-solid fa-desktop', level: 'Expert' },
      ],
    },
  ];

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert':
        return `
        bg-primary/10 text-primary border-primary/20
        dark:bg-primary/20 dark:text-primary dark:border-primary/40
      `;

      case 'Advanced':
        return `
        bg-sky-200/30 text-sky-800 border-sky-300
        dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40
      `;

      case 'Proficient':
        return `
        bg-emerald-200/30 text-emerald-800 border-emerald-300
        dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40
      `;

      default:
        return `
        bg-muted text-muted-foreground border-border
        dark:bg-muted/40 dark:text-muted-foreground
      `;
    }
  }


}
