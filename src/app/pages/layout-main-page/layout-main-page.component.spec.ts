import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMainPageComponent } from './layout-main-page.component';

describe('LayoutMainPageComponent', () => {
  let component: LayoutMainPageComponent;
  let fixture: ComponentFixture<LayoutMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
