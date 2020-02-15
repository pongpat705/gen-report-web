import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {CreateReportComponent} from '../../modules/create-report/create-report.component';
import {AppLayoutComponent} from '../../core/app-layout/app-layout.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {NotfoundComponent} from '../../core/notfound/notfound.component';
import {ReportDesignComponent} from '../../modules/report-design/report-design.component';

const appRoutes: Route[] = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'create-report', component: CreateReportComponent},
      {path: 'report-design', component: ReportDesignComponent},
      {path: '**', component: NotfoundComponent}
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
