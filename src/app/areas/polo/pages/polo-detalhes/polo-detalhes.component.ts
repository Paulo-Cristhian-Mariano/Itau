import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { IBusiness } from 'src/app/areas/polo/interfaces/IBusiness';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ɵallowPreviousPlayerStylesMerge } from '@angular/animations/browser';

@Component({
  selector: 'app-polo-detalhes',
  templateUrl: './polo-detalhes.component.html',
  styleUrls: ['./polo-detalhes.component.scss']
})
export class PoloDetalhesComponent implements OnInit {

  public polo: any;
  public retornoPolo!: IBusiness;
  public idReq!: string
teste: any = ""
  public formEndereco!: FormGroup;
  public formEmpresa!: FormGroup;

  constructor(
    private _consultas: ConsultasService<IBusiness>,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.request()

    this.formEndereco = this.formBuilder.group({
      cep: [null, Validators.required],
      rua: [null],
      bairro: [null],
      estado: [null],
      cidade: [null]
    })

    this.formEmpresa = this.formBuilder.group({
      name: [null, Validators.required],
      business: [null],
      valuation: [null],
      cnpj: [null],
      active: [null]
    })
    
  }

  request(){
    let id = this.route.snapshot.paramMap.get("id")
    id != null ? this.idReq = id:null;

    this.polo = this._consultas.getByID("itau_teste", this.idReq).subscribe((data: IBusiness) => {
      console.log(data)
      this.teste = data
      this.retornoPolo = data
      this.popular(data)
    })
  }

  popular(data: IBusiness){
    this.formEmpresa = this.formBuilder.group({
      name: [data.name, Validators.required],
      business: [data.business],
      valuation: [data.valuation],
      cnpj: [data.cnpj],
      active: [data.active]
    })
  }

}
