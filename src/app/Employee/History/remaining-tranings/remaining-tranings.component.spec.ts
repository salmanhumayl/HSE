import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingTraningsComponent } from './remaining-tranings.component';

describe('RemainingTraningsComponent', () => {
  let component: RemainingTraningsComponent;
  let fixture: ComponentFixture<RemainingTraningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingTraningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingTraningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
