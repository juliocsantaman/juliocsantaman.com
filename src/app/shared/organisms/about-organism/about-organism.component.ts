import { Component } from '@angular/core';

interface Stat {
  icon: 'calendar' | 'briefcase' | 'map-pin' | 'code';
  label: string;
  value: string;
  testId: string;
}

@Component({
  selector: 'app-about-organism',
  templateUrl: './about-organism.component.html',
  styleUrls: ['./about-organism.component.scss']
})
export class AboutOrganismComponent {
  stats: Stat[] = [
    {
      icon: 'calendar',
      label: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.EXPERIENCE.LABEL',
      value: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.EXPERIENCE.VALUE',
      testId: 'experience',
    },
    {
      icon: 'briefcase',
      label: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.CURRENT_ROLE.LABEL',
      value: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.CURRENT_ROLE.VALUE',
      testId: 'current-role',
    },
    {
      icon: 'map-pin',
      label: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.LOCATION.LABEL',
      value: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.LOCATION.VALUE',
      testId: 'location',
    },
    {
      icon: 'code',
      label: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.PROJECTS.LABEL',
      value: 'ROOT.APP.ORGANISMS.ABOUT_ORGANISM.STATS.PROJECTS.VALUE',
      testId: 'projects',
    },
  ];
}
