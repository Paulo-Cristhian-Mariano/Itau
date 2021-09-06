import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CepPipe } from './pipes/cep.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';

@NgModule({
  declarations: [
    ToolbarComponent,
    TableComponent,
    CepPipe,
    CnpjPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ToolbarComponent,
    TableComponent,
    CepPipe,
    CnpjPipe
  ]
})
export class SharedModule { }
