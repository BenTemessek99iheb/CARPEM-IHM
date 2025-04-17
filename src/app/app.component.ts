import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carpem-frontend';
  
}
