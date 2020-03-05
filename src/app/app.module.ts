import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveModule } from 'ngx-responsive';

import { MatSidenavModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverlayContainer } from '@angular/cdk/overlay';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppointmentComponent, InfoPopUp } from './appointment/appointment.component';

const config = {
  breakPoints: {
    xs: { max: 600 },
    sm: { min: 601, max: 959 },
    md: { min: 960, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AppointmentComponent,
    InfoPopUp
  ],
  entryComponents: [
    InfoPopUp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResponsiveModule.forRoot(config),
    ReactiveFormsModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    FlexLayoutModule,
    ResponsiveModule.forRoot()
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
