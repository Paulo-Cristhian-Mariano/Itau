import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { IBusiness } from '../../interfaces/ibusiness';

@Component({
  selector: 'app-polos',
  templateUrl: './polos.component.html',
  styleUrls: ['./polos.component.scss']
})
export class PolosComponent implements OnInit, OnDestroy {

  public polos: any;
  constructor(private _consultas: ConsultasService<IBusiness[]>) { }

  ngOnInit(): void{
    this.polos = this._consultas.get("itau_teste").subscribe((data) => {
      console.log(data)
    })
  }

  ngOnDestroy(){
    this.polos.unsubscribe()
  }

}
