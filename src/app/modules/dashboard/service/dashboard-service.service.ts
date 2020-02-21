import {Injectable} from '@angular/core';
import {ResponseModel} from '../../../core/model/response-model';
import {ReportModel} from '../../../core/model/report-model';
import {CallApiService} from '../../../services/common-serivce/call-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  sqlText: string = null;

  constructor(
    private callApiService: CallApiService
  ) {
  }

  public setSqlText(text: string): void {
    this.sqlText = text;
  }

  public getSqlText(): string {
    return this.sqlText;
  }


  public loadReportList(): Observable<ResponseModel<ReportModel[]>> {
    return this.callApiService.getReportList();
  }
}
