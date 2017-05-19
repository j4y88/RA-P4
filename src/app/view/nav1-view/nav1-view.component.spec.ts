import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav1ViewComponent } from './nav1-view.component';

describe('Nav1ViewComponent', () => {
  let component: Nav1ViewComponent;
  let fixture: ComponentFixture<Nav1ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav1ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
