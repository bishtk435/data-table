import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnName',
})
export class ColumnNamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
