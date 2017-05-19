import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAdventureViewComponent } from './latest-adventure-view.component';

describe('LatestBlogViewComponent', () => {
  let component: LatestAdventureViewComponent;
  let fixture: ComponentFixture<LatestAdventureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAdventureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAdventureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
