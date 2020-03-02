import {Component, OnInit, ViewChild} from '@angular/core';
import {ReportStructure} from '../../../../core/model/report-structure';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {DashboardServiceService} from '../../service/dashboard-service.service';
import {ResponseModel} from '../../../../core/model/response-model';

@Component({
  selector: 'app-report-design',
  templateUrl: './report-design.component.html',
  styleUrls: ['./report-design.component.css']
})
export class ReportDesignComponent implements OnInit {

  allColumns: ReportStructure[];

  selectedColumns: ReportStructure[];

  currentReportId: number = null;

  constructor(
    private snackBar: MatSnackBar,
    private dashboardService: DashboardServiceService
  ) {
  }

  ngOnInit() {

    this.currentReportId = this.dashboardService.currentReportId;
    this.dashboardService.loadReportStructure(this.currentReportId).subscribe((resp: ResponseModel<ReportStructure[]>) => {
      this.allColumns = resp.data;
    });


    this.selectedColumns = new Array<ReportStructure>();


  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  drop(event: CdkDragDrop<ReportStructure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);
      const reportStructure: ReportStructure = event.previousContainer.data[event.previousIndex];
      const isExist = event.container.data.find((x: ReportStructure) => {
        return x.filedNo === reportStructure.filedNo;
      });
      if (!isExist) {
        copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }

    }
  }

  boxDropped(event: CdkDragDrop<ReportStructure>) {
    console.log(event);
  }

}
