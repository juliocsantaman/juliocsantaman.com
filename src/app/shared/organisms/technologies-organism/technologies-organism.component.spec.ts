import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesOrganismComponent } from './technologies-organism.component';

describe('TechnologiesOrganismComponent', () => {
  let component: TechnologiesOrganismComponent;
  let fixture: ComponentFixture<TechnologiesOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
