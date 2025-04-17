import { Routes } from '@angular/router';
import { PatientBiochemistryComponent } from './patient-biochemistry/patient-biochemistry.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

export const routes: Routes = [
    {path: '', component: PatientFormComponent},
    { path: 'patient/biochemistry', component: PatientBiochemistryComponent },
];
