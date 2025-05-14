import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensTrainingComponent } from './opens-training.component';

describe('OpensTrainingComponent', () => {
  let component: OpensTrainingComponent;
  let fixture: ComponentFixture<OpensTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpensTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpensTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
