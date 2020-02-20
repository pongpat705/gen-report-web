import {Component, OnInit, ViewChild} from '@angular/core';
import {ReportStructure} from '../../../../core/model/report-structure';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-report-design',
  templateUrl: './report-design.component.html',
  styleUrls: ['./report-design.component.css']
})
export class ReportDesignComponent implements OnInit {

  allColumns: ReportStructure[];

  selectedColumns: ReportStructure[];

  constructor() { }

  ngOnInit() {
    this.allColumns = new Array<ReportStructure>();
    this.selectedColumns = new Array<ReportStructure>();
    this.allColumns.push({fieldName: 'ORDER_ID', fieldType: 'NUMBER', filedNo: 1,  reportId: 1, structureId: 1});
    this.allColumns.push({fieldName: 'ORDER_DATE', fieldType: 'VARCHAR', filedNo: 2,  reportId: 1, structureId: 2});
    this.allColumns.push({fieldName: 'CUSTOMER_CODE', fieldType: 'VARCHAR', filedNo: 3,  reportId: 1, structureId: 3});
    this.allColumns.push({fieldName: 'COMPANY_NAME', fieldType: 'VARCHAR', filedNo: 4,  reportId: 1, structureId: 4});
    this.allColumns.push({fieldName: 'EMPLOYEE_NAME', fieldType: 'VARCHAR', filedNo: 5,  reportId: 1, structureId: 5});
    this.allColumns.push({fieldName: 'EMPLOYEE_POSITION', fieldType: 'VARCHAR', filedNo: 6,  reportId: 1, structureId: 6});
    this.allColumns.push({fieldName: 'CATEGORY_NAME', fieldType: 'VARCHAR', filedNo: 7,  reportId: 1, structureId: 7});
    this.allColumns.push({fieldName: 'PRODUCT_BRAND', fieldType: 'VARCHAR', filedNo: 8,  reportId: 1, structureId: 8});
    this.allColumns.push({fieldName: 'PRODUCT_NAME', fieldType: 'VARCHAR', filedNo: 9,  reportId: 1, structureId: 9});
    this.allColumns.push({fieldName: 'QUANTITY', fieldType: 'NUMBER', filedNo: 10, reportId: 1, structureId: 10});
    this.allColumns.push({fieldName: 'UNIT_PRICE', fieldType: 'VARCHAR', filedNo: 11, reportId: 1, structureId: 11});
    this.allColumns.push({fieldName: 'DISCOUNT', fieldType: 'VARCHAR', filedNo: 12, reportId: 1, structureId: 12});
    this.allColumns.push({fieldName: 'TOTAL_PRICE', fieldType: 'VARCHAR', filedNo: 13, reportId: 1, structureId: 13});


  }

  drop(event: CdkDragDrop<ReportStructure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);
      const reportStructure: ReportStructure  = event.previousContainer.data[event.previousIndex];
      const isExist = event.container.data.find( (x: ReportStructure) => {
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
