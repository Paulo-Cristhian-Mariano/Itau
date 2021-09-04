import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoloRoutingModule } from './polo-routing.module';
import { PolosComponent } from './pages/polos/polos.component';
import { PoloDetalhesComponent } from './pages/polo-detalhes/polo-detalhes.component';


@NgModule({
  declarations: [
    PolosComponent,
    PoloDetalhesComponent
  ],
  imports: [
    CommonModule,
    PoloRoutingModule
  ]
})
export class PoloModule { }
