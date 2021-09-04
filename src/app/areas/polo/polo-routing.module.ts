import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoloDetalhesComponent } from './pages/polo-detalhes/polo-detalhes.component';
import { PolosComponent } from './pages/polos/polos.component';

const routes: Routes = [
  {
    path: 'polos',
    component: PolosComponent
  },
  {
    path: 'detalhes',
    component: PoloDetalhesComponent
  },
  {
    path: '**',
    component: PolosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoloRoutingModule { }
