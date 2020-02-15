import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  sqlText: string = null;

  constructor() {
  }

  public setSqlText(text: string): void {
    this.sqlText = text;
  }

  public getSqlText(): string {
    return this.sqlText;
  }
}
