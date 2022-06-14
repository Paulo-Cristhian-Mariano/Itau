import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return "";
    }
    let identificacao = value.toString()
    identificacao = identificacao.replace(/[^0-9]/g, '');

    return identificacao.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
  }

}