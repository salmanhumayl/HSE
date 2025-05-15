import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateRegisterComponent } from './consolidate-register.component';

describe('ConsolidateRegisterComponent', () => {
  let component: ConsolidateRegisterComponent;
  let fixture: ComponentFixture<ConsolidateRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidateRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
