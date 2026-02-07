import { Component, HostListener, OnInit } from '@angular/core';
import { IsActiveMatchOptions, Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-header-organism',
  templateUrl: './header-organism.component.html',
  styleUrls: ['./header-organism.component.scss']
})
export class HeaderOrganismComponent implements OnInit {

  constructor
    (
      private router: Router
    ) {

  }

  ngOnInit(): void {
    this.isDark = document.documentElement.classList.contains('dark');
  }

  isLinkActive(route: string): boolean {
    const urlTree: UrlTree = this.router.createUrlTree([route]);
    const matchOptions: IsActiveMatchOptions = {
      paths: 'exact', queryParams: 'exact', fragment: 'ignored',
      matrixParams: 'ignored'
    };

    return this.router.isActive(urlTree, matchOptions);
  }

  isScrolled = false;
  isMobileMenuOpen = false;
  isDark = false;

  navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'technologies' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
    this.isDark = !this.isDark;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.isMobileMenuOpen = false;
  }
}
