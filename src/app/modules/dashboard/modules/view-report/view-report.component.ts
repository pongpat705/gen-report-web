import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ReportStructure} from '../../../../core/model/report-structure';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  allColumns: ReportStructure[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.allColumns = new Array<ReportStructure>();
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
    this.displayedColumns = new Array<string>();
    this.allColumns.forEach((x: ReportStructure) => {
      this.displayedColumns.push(x.fieldName);
    });
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    this.paginator.length = this.allColumns.length;
    this.paginator.pageSize = 5;
  }

}

const ELEMENT_DATA: any[] = [
  {
    ORDER_ID: 10248,
    ORDER_DATE: '04 ก.ค.  2539',
    CUSTOMER_CODE: 'VINET',
    COMPANY_NAME: 'Vins et alcools Chevalier',
    EMPLOYEE_NAME: 'Mr. Steven Buchanan',
    EMPLOYEE_POSITION: 'Sales Manager',
    CATEGORY_NAME: 'Dairy Products',
    PRODUCT_BRAND: 'Formaggi Fortini s.r.l.',
    PRODUCT_NAME: 'Mozzarella di Giovanni',
    QUANTITY: 5,
    UNIT_PRICE: '34.80',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '174.00'
  },
  {
    ORDER_ID: 10248,
    ORDER_DATE: '04 ก.ค.  2539',
    CUSTOMER_CODE: 'VINET',
    COMPANY_NAME: 'Vins et alcools Chevalier',
    EMPLOYEE_NAME: 'Mr. Steven Buchanan',
    EMPLOYEE_POSITION: 'Sales Manager',
    CATEGORY_NAME: 'Dairy Products',
    PRODUCT_BRAND: 'Cooperativa de Quesos \'Las Cabras\'',
    PRODUCT_NAME: 'Queso Cabrales',
    QUANTITY: 12,
    UNIT_PRICE: '14.00',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '168.00'
  },
  {
    ORDER_ID: 10248,
    ORDER_DATE: '04 ก.ค.  2539',
    CUSTOMER_CODE: 'VINET',
    COMPANY_NAME: 'Vins et alcools Chevalier',
    EMPLOYEE_NAME: 'Mr. Steven Buchanan',
    EMPLOYEE_POSITION: 'Sales Manager',
    CATEGORY_NAME: 'Grains/Cereals',
    PRODUCT_BRAND: 'Leka Trading',
    PRODUCT_NAME: 'Singaporean Hokkien Fried Mee',
    QUANTITY: 10,
    UNIT_PRICE: '9.80',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '98.00'
  },
  {
    ORDER_ID: 10249,
    ORDER_DATE: '05 ก.ค.  2539',
    CUSTOMER_CODE: 'TOMSP',
    COMPANY_NAME: 'Toms Spezialitäten',
    EMPLOYEE_NAME: 'Mr. Michael Suyama',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Produce',
    PRODUCT_BRAND: 'G\'day, Mate',
    PRODUCT_NAME: 'Manjimup Dried Apples',
    QUANTITY: 40,
    UNIT_PRICE: '42.40',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '1,696.00'
  },
  {
    ORDER_ID: 10249,
    ORDER_DATE: '05 ก.ค.  2539',
    CUSTOMER_CODE: 'TOMSP',
    COMPANY_NAME: 'Toms Spezialitäten',
    EMPLOYEE_NAME: 'Mr. Michael Suyama',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Produce',
    PRODUCT_BRAND: 'Mayumi\'s',
    PRODUCT_NAME: 'Tofu',
    QUANTITY: 9,
    UNIT_PRICE: '18.60',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '167.40'
  },
  {
    ORDER_ID: 10250,
    ORDER_DATE: '08 ก.ค.  2539',
    CUSTOMER_CODE: 'HANAR',
    COMPANY_NAME: 'Hanari Carnes',
    EMPLOYEE_NAME: 'Mrs. Margaret Peacock',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Seafood',
    PRODUCT_BRAND: 'New England Seafood Cannery',
    PRODUCT_NAME: 'Jack\'s New England Clam Chowder',
    QUANTITY: 10,
    UNIT_PRICE: '7.70',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '77.00'
  },
  {
    ORDER_ID: 10250,
    ORDER_DATE: '08 ก.ค.  2539',
    CUSTOMER_CODE: 'HANAR',
    COMPANY_NAME: 'Hanari Carnes',
    EMPLOYEE_NAME: 'Mrs. Margaret Peacock',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Condiments',
    PRODUCT_BRAND: 'New Orleans Cajun Delights',
    PRODUCT_NAME: 'Louisiana Fiery Hot Pepper Sauce',
    QUANTITY: 15,
    UNIT_PRICE: '16.80',
    DISCOUNT: '0.15',
    TOTAL_PRICE: '214.20'
  },
  {
    ORDER_ID: 10250,
    ORDER_DATE: '08 ก.ค.  2539',
    CUSTOMER_CODE: 'HANAR',
    COMPANY_NAME: 'Hanari Carnes',
    EMPLOYEE_NAME: 'Mrs. Margaret Peacock',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Produce',
    PRODUCT_BRAND: 'G\'day, Mate',
    PRODUCT_NAME: 'Manjimup Dried Apples',
    QUANTITY: 35,
    UNIT_PRICE: '42.40',
    DISCOUNT: '0.15',
    TOTAL_PRICE: '1,261.40'
  },
  {
    ORDER_ID: 10251,
    ORDER_DATE: '08 ก.ค.  2539',
    CUSTOMER_CODE: 'VICTE',
    COMPANY_NAME: 'Victuailles en stock',
    EMPLOYEE_NAME: 'Ms. Janet Leverling',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Grains/Cereals',
    PRODUCT_BRAND: 'PB Knäckebröd AB',
    PRODUCT_NAME: 'Gustaf\'s Knäckebröd',
    QUANTITY: 6,
    UNIT_PRICE: '16.80',
    DISCOUNT: '0.05',
    TOTAL_PRICE: '95.76'
  },
  {
    ORDER_ID: 10251,
    ORDER_DATE: '08 ก.ค.  2539',
    CUSTOMER_CODE: 'VICTE',
    COMPANY_NAME: 'Victuailles en stock',
    EMPLOYEE_NAME: 'Ms. Janet Leverling',
    EMPLOYEE_POSITION: 'Sales Representative',
    CATEGORY_NAME: 'Condiments',
    PRODUCT_BRAND: 'New Orleans Cajun Delights',
    PRODUCT_NAME: 'Louisiana Fiery Hot Pepper Sauce',
    QUANTITY: 20,
    UNIT_PRICE: '16.80',
    DISCOUNT: '0.00',
    TOTAL_PRICE: '336.00'
  }
];

