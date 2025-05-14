import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTrainingComponent } from './assign-training.component';

describe('AssignTrainingComponent', () => {
  let component: AssignTrainingComponent;
  let fixture: ComponentFixture<AssignTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
