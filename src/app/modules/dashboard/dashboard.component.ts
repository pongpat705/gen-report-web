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
    private dashboardService: DashboardServiceService
  ) {
  }

  ngOnInit() {
    this.reportTypeParam.set('LIST_REPORT', '/assets/report-list-ex.png');
    this.reportTypeParam.set('DETAIL_REPORT', '/assets/report-detail-ex.png');
    this.reportList = new Array<ReportModel>();
    const sql = 'select o.order_id,\n' +
      '       to_char(o.order_date,\n' +
      '               \'dd MON yyyy\',\n' +
      '               \'NLS_CALENDAR=\'\'THAI BUDDHA\'\' NLS_DATE_LANGUAGE=THAI\') order_date,\n' +
      '       c.customer_code,\n' +
      '       c.company_name,\n' +
      '       e.title_of_courtesy || \' \' || e.firstname || \' \' || e.lastname as employee_name,\n' +
      '       e.title employee_position,\n' +
      '       cat.category_name,\n' +
      '       s.company_name product_brand,\n' +
      '       p.product_name,\n' +
      '       od.quantity,\n' +
      '       TO_CHAR(od.unit_price, \'fm99G990D00\') unit_price,\n' +
      '       TO_CHAR(od.discount, \'fm99G990D00\') discount,\n' +
      '       TO_CHAR(((od.quantity * od.unit_price) -\n' +
      '               (od.discount * (od.quantity * od.unit_price))),\n' +
      '               \'fm99G990D00\') total_price\n' +
      '  from orders        o,\n' +
      '       order_details od,\n' +
      '       customers     c,\n' +
      '       employees     e,\n' +
      '       products      p,\n' +
      '       categories    cat,\n' +
      '       suppliers     s\n' +
      ' where o.order_id = od.order_id\n' +
      '   and o.customer_id = c.customer_id\n' +
      '   and o.employee_id = e.employee_id\n' +
      '   and od.product_id = p.product_id\n' +
      '   and p.category_id = cat.category_id\n' +
      '   and p.supplier_id = s.supplier_id\n' +
      ' order by o.order_id, c.customer_code, p.product_name';
    this.reportList.push({reportId: 1, reportName: 'report_invoice1', reportQuery: sql + '_1', reportType: 'LIST_REPORT'});
    this.reportList.push({reportId: 2, reportName: 'report_invoice2', reportQuery: sql + '_2', reportType: 'DETAIL_REPORT'});
    this.reportList.push({reportId: 3, reportName: 'report_invoice3', reportQuery: sql + '_3', reportType: 'LIST_REPORT'});
    this.reportList.push({reportId: 4, reportName: 'report_invoice4', reportQuery: sql + '_4', reportType: 'DETAIL_REPORT'});
    this.reportList.push({reportId: 5, reportName: 'report_invoice5', reportQuery: sql + '_5', reportType: 'LIST_REPORT'});
  }

  public openBottomSheet(text: string): void {
    this.dashboardService.setSqlText(text);
    this.bottomSheet.open(SqlBottomSheetComponent);
  }

}
