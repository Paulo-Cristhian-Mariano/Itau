import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { IBusiness } from 'src/app/areas/polo/interfaces/IBusiness';

@Component({
  selector: 'app-polos',
  templateUrl: './polos.component.html',
  styleUrls: ['./polos.component.scss']
})
export class PolosComponent implements OnInit, OnDestroy {

  public polos: any;
  public retornoPolos: IBusiness[] = [];
  public inpText!: Event;

  constructor(
    private _consultas: ConsultasService<IBusiness>,
  ) { }

  ngOnInit(): void {
    this.polos = this._consultas.get("itau_teste").subscribe((data: IBusiness[]) => {
      console.log(data)
      this.retornoPolos = data
    })
  }

  ngOnDestroy() {
    this.polos.unsubscribe()
  }

  search(param: any){
    this.inpText = param
  }
}
