import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogViewComponent } from './latest-blog-view.component';

describe('LatestBlogViewComponent', () => {
  let component: LatestBlogViewComponent;
  let fixture: ComponentFixture<LatestBlogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestBlogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
