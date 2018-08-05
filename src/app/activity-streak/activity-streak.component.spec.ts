import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStreakComponent } from './activity-streak.component';

describe('ActivityStreakComponent', () => {
  let component: ActivityStreakComponent;
  let fixture: ComponentFixture<ActivityStreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
