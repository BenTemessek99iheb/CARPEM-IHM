import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHematologieComponent } from './patient-hematologie.component';

describe('PatientHematologieComponent', () => {
  let component: PatientHematologieComponent;
  let fixture: ComponentFixture<PatientHematologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHematologieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHematologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
