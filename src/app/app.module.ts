import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateReportComponent } from './modules/create-report/create-report.component';
import {AppRouteModule} from './configurations/app-route/app-route.module';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { AppFooterComponent } from './core/app-footer/app-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBottomSheetModule
} from '@angular/material';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { SqlBottomSheetComponent } from './modules/dashboard/modules/sql-bottom-sheet/sql-bottom-sheet.component';
import { ReportDesignComponent } from './modules/report-design/report-design.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateReportComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DashboardComponent,
    NotfoundComponent,
    SqlBottomSheetComponent,
    ReportDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [SqlBottomSheetComponent]
})
export class AppModule { }
