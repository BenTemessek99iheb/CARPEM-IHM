import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatAccordion } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-patient-form',
  standalone: true,
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    TranslateModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PatientFormComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
