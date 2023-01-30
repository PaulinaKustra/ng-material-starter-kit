import { NgModule } from '@angular/core';
import { TestowyComponent } from './testowy.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatButtonModule],
  declarations: [TestowyComponent],
  providers: [],
  exports: [TestowyComponent]
})
export class TestowyComponentModule {
}
