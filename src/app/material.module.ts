import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [
  MatButtonModule,
  MatSliderModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})

export class MaterialModule { }