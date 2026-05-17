import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects-organism',
  templateUrl: './projects-organism.component.html',
  styleUrls: ['./projects-organism.component.scss']
})
export class ProjectsOrganismComponent {

  projects: Project[] = [
    {
      title: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.STORYTELLING.TITLE",
      description: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.STORYTELLING.DESCRIPTION",
      image: 'assets/img/project-storytelling.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/home-page",
      githubUrl: "https://github.com/juliocsantaman/home-page",
    },
    {
      title: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.SPORTS.TITLE",
      description: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.SPORTS.DESCRIPTION",
      image: 'assets/img/project-sports.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/events",
      githubUrl: "https://github.com/juliocsantaman/events",
    },
    {
      title: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.ONE_PAGE_NHOA.TITLE",
      description: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.ONE_PAGE_NHOA.DESCRIPTION",
      image: 'assets/img/project-one-page-nhoa.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/one-page-nhoa",
      githubUrl: "https://github.com/juliocsantaman/one-page-nhoa",
    },
    {
      title: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.IMAGE_GALLERY.TITLE",
      description: "ROOT.APP.ORGANISMS.PROJECTS_ORGANISM.ITEMS.IMAGE_GALLERY.DESCRIPTION",
      image: 'assets/img/project-image-gallery.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/image-gallery",
      githubUrl: "https://github.com/juliocsantaman/image-gallery",
    },
    // {
    //   title: "Fitness Tracker",
    //   description: "Mobile-responsive fitness tracking application with workout planning, progress monitoring, and health metrics.",
    //   image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Fitness_tracking_app_0ce73a3f-Da-v1r0I.png',
    //   tags: ["React Native", "Node.js", "MongoDB"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Business Dashboard",
    //   description: "Enterprise-level dashboard for monitoring KPIs, generating reports, and managing business operations efficiently.",
    //   image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Web_dashboard_project_479310d3-roE1czpt.png',
    //   tags: ["TypeScript", "Express", "PostgreSQL", "AWS"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },
  ];

}
