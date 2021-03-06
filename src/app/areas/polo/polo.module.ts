import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoloRoutingModule } from './polo-routing.module';
import { PolosComponent } from './pages/polos/polos.component';
import { PoloDetalhesComponent } from './pages/polo-detalhes/polo-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PolosComponent,
    PoloDetalhesComponent
  ],
  imports: [
    CommonModule,
    PoloRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class PoloModule { }
