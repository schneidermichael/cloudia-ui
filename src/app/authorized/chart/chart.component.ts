import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HistoryService} from "../../shared/service/history.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  private routeSub: Subscription | undefined;

  private dataProviderA  = [1.0,2.0,3.0,4.0,5.0,6.0];

  private dataProviderB  = [1.0,2.0,3.0,4.0,5.0,6.0];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '07/2022', '08/2022', '09/2022', '10/2022', '11/2022', '12/2022' ],
    datasets: [
      { data: this.dataProviderA, label: 'Provider A' },
      { data: this.dataProviderB, label: 'Provider B' }
    ]
  };

  constructor(private route: ActivatedRoute, private service : HistoryService) {
    //This is empty
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.service.findOne(params['id']).subscribe(value => {
        // @ts-ignore
        const map1 = this.dataProviderA.map(x => parseInt(x * value.price_a));
        // @ts-ignore
        const map2 = this.dataProviderB.map(x => parseInt(x * value.price_b));

        this.barChartData.datasets[0].data = map1
        this.barChartData.datasets[1].data = map2

        this.chart?.update();
      });
    });
  }

}
