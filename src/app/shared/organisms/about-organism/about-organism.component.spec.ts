import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOrganismComponent } from './about-organism.component';

describe('AboutOrganismComponent', () => {
  let component: AboutOrganismComponent;
  let fixture: ComponentFixture<AboutOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
