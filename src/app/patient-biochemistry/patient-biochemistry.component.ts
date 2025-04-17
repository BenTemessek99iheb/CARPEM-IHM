import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-patient-biochemistry',
  imports: [
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule],
  templateUrl: './patient-biochemistry.component.html',
  styleUrl: './patient-biochemistry.component.css'
})
export class PatientBiochemistryComponent {
  showOtherData = false;
}
