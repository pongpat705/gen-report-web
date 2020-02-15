import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {DashboardServiceService} from '../../service/dashboard-service.service';

@Component({
  selector: 'app-sql-bottom-sheet',
  templateUrl: './sql-bottom-sheet.component.html',
  styleUrls: ['./sql-bottom-sheet.component.css']
})
export class SqlBottomSheetComponent implements OnInit {

  text: string = null;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<SqlBottomSheetComponent>,
    private dashboardService: DashboardServiceService
  ) {
  }

  ngOnInit(): void {
    this.text = this.dashboardService.getSqlText();
  }

}
