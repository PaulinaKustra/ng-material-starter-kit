import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserGenderRadioComponent } from './user-gender-radio.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule],
  declarations: [UserGenderRadioComponent],
  providers: [],
  exports: [UserGenderRadioComponent]
})
export class UserGenderRadioComponentModule {
}
