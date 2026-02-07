import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOrganismComponent } from './projects-organism.component';

describe('ProjectsOrganismComponent', () => {
  let component: ProjectsOrganismComponent;
  let fixture: ComponentFixture<ProjectsOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
