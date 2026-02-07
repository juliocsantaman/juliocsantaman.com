import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOrganismComponent } from './contact-organism.component';

describe('ContactOrganismComponent', () => {
  let component: ContactOrganismComponent;
  let fixture: ComponentFixture<ContactOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
