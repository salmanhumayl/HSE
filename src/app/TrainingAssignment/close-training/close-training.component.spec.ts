import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTrainingComponent } from './close-training.component';

describe('CloseTrainingComponent', () => {
  let component: CloseTrainingComponent;
  let fixture: ComponentFixture<CloseTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
