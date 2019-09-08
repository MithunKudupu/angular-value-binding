import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let argsPassed = '';

    args.forEach(a => {
      argsPassed += a + ', ';
    });
    return `Value: ${value.toString()} and Args: ${argsPassed}`;
  }
}
