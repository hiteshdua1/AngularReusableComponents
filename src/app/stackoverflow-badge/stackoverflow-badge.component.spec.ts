import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowBadgeComponent } from './stackoverflow-badge.component';

describe('StackoverflowBadgeComponent', () => {
  let component: StackoverflowBadgeComponent;
  let fixture: ComponentFixture<StackoverflowBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackoverflowBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
