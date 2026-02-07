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
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualizations and comprehensive reporting features for business insights.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Analytics_dashboard_visualization_5abbf15d-BvXJqmv5.png',
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and mobile-first design.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Mobile_ecommerce_app_df9ed210-BcyHqhSf.png',
      tags: ["Vue.js", "Express", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with kanban boards, real-time updates, and team collaboration features.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Task_management_app_39be6063-C3xgMaOP.png',
      tags: ["React", "Tailwind", "Firebase", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot application powered by AI for customer support with natural language processing capabilities.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/AI_chat_application_d0df6e54-6e6sNTtM.png',
      tags: ["Python", "React", "OpenAI", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking application with workout planning, progress monitoring, and health metrics.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Fitness_tracking_app_0ce73a3f-Da-v1r0I.png',
      tags: ["React Native", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Business Dashboard",
      description: "Enterprise-level dashboard for monitoring KPIs, generating reports, and managing business operations efficiently.",
      image: 'https://dev-folio-x--juliocsantaman.replit.app/assets/Web_dashboard_project_479310d3-roE1czpt.png',
      tags: ["TypeScript", "Express", "PostgreSQL", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

}
