import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material.module';

const shared = [
  ToolbarComponent
]

@NgModule({
  declarations: [
    shared
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    shared
  ]
})
export class SharedModule { }
