import { Component, OnInit } from '@angular/core';
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
  ) 
  {
    
  }

  ngOnInit(): void {
      
  }

  isLinkActive(route: string): boolean {
    const urlTree: UrlTree = this.router.createUrlTree([route]);
    const matchOptions: IsActiveMatchOptions = {
      paths: 'exact', queryParams: 'exact', fragment: 'ignored',
      matrixParams: 'ignored'
    };

    return this.router.isActive(urlTree, matchOptions);
  }
}
