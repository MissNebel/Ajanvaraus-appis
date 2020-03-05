import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent, data: { title: 'Appointment Component' } },
  { path: 'appointment', component: AppointmentComponent, data: { title: 'Appointment Component' } }
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
