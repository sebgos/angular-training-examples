import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, activo: boolean = true): string {
    let password = '';
    if (activo) {
        password = value.replace(/./g, '*');
    } else {
        password = value;
    }

    return password;
}

}
