import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav2ViewComponent } from './nav2-view.component';

describe('Nav2ViewComponent', () => {
  let component: Nav2ViewComponent;
  let fixture: ComponentFixture<Nav2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
