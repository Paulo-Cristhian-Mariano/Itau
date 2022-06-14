import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'polo',
    data: {title: 'Polo'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./areas/polo/polo.module').then(m => m.PoloModule)
  },
  {
    path: '**',
    data: {title: 'Polo'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./areas/polo/polo.module').then(m => m.PoloModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
