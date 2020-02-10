import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../service/metrics.service';

@Component({
  selector: 'mtr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public metricsService: MetricsService) {
  }

  ngOnInit() {
  }
}
