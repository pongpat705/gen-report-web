import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseModel} from '../../core/model/response-model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ReportModel} from '../../core/model/report-model';
import {environment} from '../../../environments/environment';

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
        tap(_ => console.log('getAmphurByAmphurCode success')
          )
      );
  }
}
