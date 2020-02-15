import { Component, OnInit } from '@angular/core';
import {DropdownModel} from './model/dropdown-model';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  reportTypeDropdown: DropdownModel<string>[];
  constructor() { }

  ngOnInit() {
    this.reportTypeDropdown = new Array<DropdownModel<string>>();
    this.reportTypeDropdown.push({value: 'LIST_REPORT', id: 1, label: 'List Report'});
    this.reportTypeDropdown.push({value: 'DETAIL_REPORT', id: 2, label: 'Detail Report'});

  }

}
