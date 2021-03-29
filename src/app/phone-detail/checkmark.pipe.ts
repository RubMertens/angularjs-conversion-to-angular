import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmark'
})
export class CheckMarkPipe implements PipeTransform {
  transform(input: boolean): string {
    return input ? '\u2713' : '\u2718';
  }
}
