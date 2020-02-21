import {Component, OnInit} from '@angular/core';
import {ReportModel} from '../../core/model/report-model';
import {MatBottomSheet} from '@angular/material';
import {SqlBottomSheetComponent} from './modules/sql-bottom-sheet/sql-bottom-sheet.component';
import {DashboardServiceService} from './service/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reportList: ReportModel[];

  reportTypeParam: Map<string, string> = new Map<string, string>();

  constructor(
    private bottomSheet: MatBottomSheet,
    private dashboardService: DashboardServiceService,
  ) {
  }

  ngOnInit() {
    this.reportTypeParam.set('LIST_REPORT', '/assets/report-list-ex.png');
    this.reportTypeParam.set('DETAIL_REPORT', '/assets/report-detail-ex.png');
    this.dashboardService.loadReportList().subscribe((resp) => {
      this.reportList = resp.data;
    });
  }

  public openBottomSheet(text: string): void {
    this.dashboardService.setSqlText(text);
    this.bottomSheet.open(SqlBottomSheetComponent);
  }

}
