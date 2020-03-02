import {Injectable} from '@angular/core';
import {ResponseModel} from '../../../core/model/response-model';
import {ReportModel} from '../../../core/model/report-model';
import {CallApiService} from '../../../services/common-serivce/call-api.service';
import {Observable} from 'rxjs';
import {ReportStructure} from '../../../core/model/report-structure';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  // tslint:disable-next-line:variable-name
  private _sqlText: string = null;

  // tslint:disable-next-line:variable-name
  private _currentReportId: number = null;

  constructor(
    private callApiService: CallApiService
  ) {
  }

  get sqlText(): string {
    return this._sqlText;
  }

  set sqlText(value: string) {
    this._sqlText = value;
  }

  get currentReportId(): number {
    return this._currentReportId;
  }

  set currentReportId(value: number) {
    this._currentReportId = value;
  }

  public loadReportList(): Observable<ResponseModel<ReportModel[]>> {
    return this.callApiService.getReportList();
  }

  public loadReportStructure(reportId: number): Observable<ResponseModel<ReportStructure[]>> {
    return this.callApiService.getReportStructureList(reportId);
  }
}
