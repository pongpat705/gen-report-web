import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateReportComponent } from './modules/create-report/create-report.component';
import {AppRouteModule} from './configurations/app-route/app-route.module';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { AppFooterComponent } from './core/app-footer/app-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { DashboardComponent } from './modules/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateReportComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
