import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
// import * as cep from 'cep-promise'
// import {cep} from 'cep-promise'

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  @Output() endereco = new EventEmitter();

  public text!: string;

  constructor(private _consultas: ConsultasService<any>) { }

  ngOnInit(): void {
    // //Problema de compatibilidade da nova versão do CEP promisse com TS
    //   cep('08471430', { timeout: 5000, providers: ['brasilapi'] })
    //   .then(console.log)  
  }

  valida() {
    this.text.length == 8 || this.text.length == 9? this.request(this.text):null;
  }

  request(cep: string) {
    this._consultas.getCep(cep).subscribe((data: any) => {
      this.endereco.emit(data)
    })
  }
}
