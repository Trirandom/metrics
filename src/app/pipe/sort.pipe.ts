import { Pipe, PipeTransform } from '@angular/core';

export interface SortPipeParams {
  isReverse: boolean;
  selectedRow: number;
}

@Pipe({
  name: 'sortMetrics'
})
export class SortPipe implements PipeTransform {

  transform(value: number[][], sortPipeParams: SortPipeParams ): any {
    if (sortPipeParams) {
      const index = Number(sortPipeParams.selectedRow);
      return value.sort((a, b) => {
        if (!sortPipeParams.isReverse) {
          return a[index] - b[index];
        } else {
          return b[index] - a[index];
        }
      });
    } else {
      return value;
    }
  }

}
