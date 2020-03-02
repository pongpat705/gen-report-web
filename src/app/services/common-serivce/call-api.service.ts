import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseModel} from '../../core/model/response-model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ReportModel} from '../../core/model/report-model';
import {environment} from '../../../environments/environment';
import {ReportStructure} from '../../core/model/report-structure';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};
const endpoint = environment.services
@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    private http: HttpClient
  ) { }

  getReportList(): Observable<ResponseModel<ReportModel[]>> {
    const url = endpoint.dashboard.reportList;
    return this.http.get<ResponseModel<ReportModel[]>>(url, httpOptions)
      .pipe(
        tap(_ => console.log('getReportList success')
          )
      );
  }

  getReportStructureList(reportId: number): Observable<ResponseModel<ReportStructure[]>> {
    const url = endpoint.dashboard.reportStructureList + '/' + reportId;
    return this.http.get<ResponseModel<ReportStructure[]>>(url, httpOptions)
      .pipe(
        tap(_ => console.log('getReportStructureList success')
        )
      );
  }
}
