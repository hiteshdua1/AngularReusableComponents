import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarkdownComponent } from './content-markdown.component';

describe('ContentMarkdownComponent', () => {
  let component: ContentMarkdownComponent;
  let fixture: ComponentFixture<ContentMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
