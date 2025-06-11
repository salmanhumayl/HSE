import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSchedulingComponent } from './training-scheduling.component';

describe('TrainingSchedulingComponent', () => {
  let component: TrainingSchedulingComponent;
  let fixture: ComponentFixture<TrainingSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
