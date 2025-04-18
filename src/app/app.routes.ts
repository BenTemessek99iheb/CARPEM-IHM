import { Routes } from '@angular/router';
import { PatientBiochemistryComponent } from './patient-biochemistry/patient-biochemistry.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientHematologieComponent } from './patient-hematologie/patient-hematologie.component';

export const routes: Routes = [
    {path: '', component: PatientFormComponent},
    { path: 'patient/biochemistry', component: PatientBiochemistryComponent },
    { path: 'patient', component: PatientFormComponent },
    { path: 'patient/hemotologie', component: PatientHematologieComponent },

];
