import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return "";
    }
    let identificacao = value
    identificacao = identificacao.replace(/[^\d]/g, "");
    if (identificacao.length == 8) {
      return identificacao.replace(/(\d{5})(\d)/ , "$1-$2");
    }
    
    return identificacao;
  }

}
