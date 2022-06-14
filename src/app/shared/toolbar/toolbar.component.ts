import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public usuario: string = "John Doe";
  public nivel: string = "Diretor Itaú BBA";

  constructor() { }

  ngOnInit(): void {
  }

}
