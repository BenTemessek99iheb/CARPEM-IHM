import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBiochemistryComponent } from './patient-biochemistry.component';

describe('PatientBiochemistryComponent', () => {
  let component: PatientBiochemistryComponent;
  let fixture: ComponentFixture<PatientBiochemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientBiochemistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBiochemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
