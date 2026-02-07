import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOrganismComponent } from './hero-organism.component';

describe('HeroOrganismComponent', () => {
  let component: HeroOrganismComponent;
  let fixture: ComponentFixture<HeroOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
