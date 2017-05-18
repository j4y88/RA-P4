import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienViewComponent } from './alien-view.component';

describe('AlienViewComponent', () => {
  let component: AlienViewComponent;
  let fixture: ComponentFixture<AlienViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
