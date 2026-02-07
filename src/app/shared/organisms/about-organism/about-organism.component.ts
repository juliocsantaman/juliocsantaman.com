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
      label: 'Experience',
      value: '5+ Years',
      testId: 'experience',
    },
    {
      icon: 'briefcase',
      label: 'Current Role',
      value: 'Senior Developer',
      testId: 'current-role',
    },
    {
      icon: 'map-pin',
      label: 'Location',
      value: 'Remote',
      testId: 'location',
    },
    {
      icon: 'code',
      label: 'Projects',
      value: '50+ Completed',
      testId: 'projects',
    },
  ];
}
