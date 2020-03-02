import {Component, OnInit} from '@angular/core';
import {ReportModel} from '../../core/model/report-model';
import {MatBottomSheet} from '@angular/material';
import {SqlBottomSheetComponent} from './modules/sql-bottom-sheet/sql-bottom-sheet.component';
import {DashboardServiceService} from './service/dashboard-service.service';
import {Router} from '@angular/router';

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
    private router: Router
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
    this.dashboardService.sqlText = text;
    this.bottomSheet.open(SqlBottomSheetComponent);
  }

  public openDesignPage(reportId: number): void {
    this.dashboardService.currentReportId = reportId;
    this.router.navigateByUrl('/report-design');
  }

}
