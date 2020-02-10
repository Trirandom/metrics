import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../service/metrics.service';
import { SortPipe, SortPipeParams } from '../../pipe/sort.pipe';

@Component({
  selector: 'mtr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: number[][];
  sortParams: SortPipeParams = {
    isReverse: false,
    selectedRow: 0
  };


  constructor(
    private metricsService: MetricsService,
    private sortPipe: SortPipe
  ) {
  }

  ngOnInit() {
    this.metricsService.fetch().subscribe(metrics => {
      this.tableData = metrics.data;
    });
  }

  select(rowIndex: number) {
    if (this.sortParams.selectedRow === rowIndex) {
      this.sortParams = Object.assign({}, {
        isReverse: !this.sortParams.isReverse,
        selectedRow: this.sortParams.selectedRow
      });
    } else {
      this.sortParams = Object.assign({}, {
        isReverse: false,
        selectedRow: rowIndex
      });
    }
    this.tableData = this.sortPipe.transform(this.tableData, this.sortParams);
    this.metricsService.headValues = this.tableData[0];
  }
}
