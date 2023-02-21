import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CryptoChipsComponent } from './crypto-chips.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    CommonModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
