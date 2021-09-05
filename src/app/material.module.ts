import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
  MatButtonModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})

export class MaterialModule { }