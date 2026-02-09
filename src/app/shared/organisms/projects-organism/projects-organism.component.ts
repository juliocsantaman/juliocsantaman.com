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
      title: "Storytelling",
      description: "Solving problems with creativity and structure. It invites visitors to explore ideas, iterations, and my ongoing journey in technology and design.",
      image: 'assets/img/project-storytelling.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/home-page",
      githubUrl: "https://github.com/juliocsantaman/home-page",
    },
    {
      title: "Sports",
      description: "Gaming and esports events page featuring matches, teams, highlights, upcoming tournaments, and community engagement.",
      image: 'assets/img/project-sports.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/events",
      githubUrl: "https://github.com/juliocsantaman/events",
    },
    {
      title: "One Page Nhoa",
      description: "Real estate one-page site showcasing Nhoa Condos in Tulum with pricing, amenities, location, and brochure download for potential buyers.",
      image: 'assets/img/project-one-page-nhoa.png',
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://juliocsantaman.github.io/one-page-nhoa",
      githubUrl: "https://github.com/juliocsantaman/one-page-nhoa",
    },
    {
      title: "Image Gallery",
      description: "Responsive image gallery showcasing photos with captions in a clean, navigable layout, with smooth transitions and filters.",
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
