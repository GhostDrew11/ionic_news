import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNewsPage } from './top-news.page';

describe('TopNewsPage', () => {
  let component: TopNewsPage;
  let fixture: ComponentFixture<TopNewsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TopNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
