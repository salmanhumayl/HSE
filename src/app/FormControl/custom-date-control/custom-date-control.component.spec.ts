import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateControlComponent } from './custom-date-control.component';

describe('CustomDateControlComponent', () => {
  let component: CustomDateControlComponent;
  let fixture: ComponentFixture<CustomDateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDateControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
