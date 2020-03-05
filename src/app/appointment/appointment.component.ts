import { Component, OnInit, Input, Output, Inject, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef, MatGridList } from '@angular/material';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';


interface Work {
  value: string;
  viewValue: string;
}

interface Workers {
  value: string;
  viewValue: string;
}

interface Time {
  value: string;
  isAvailable: boolean;
  viewValue: string;
}


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  
  submitted = false;
  appointmentForm: FormGroup;
  appointment: any = {};
  cols: any = 2;


  minDate = new Date();
  maxDate = new Date();

  works: Work[] = [
    { value: 'hiustenleikkaus', viewValue: 'Hiusten leikkaus' },
    { value: 'hiustenvarjaus', viewValue: 'Hiusten värjäys' },
    { value: 'kampaus', viewValue: 'Juhlakampaus' }
  ]

  workers: Workers[] = [
    { value: 'Matti', viewValue: 'Matti' },
    { value: 'Maija', viewValue: 'Maija' },
    { value: 'Terho', viewValue: 'Terho' }
  ]

  time: Time[] = [
    { value: '08:00-09:00', isAvailable: true, viewValue: '08:00-09:00' },
    { value: '09:00-10:00', isAvailable: false, viewValue: '09:00-10:00' },
    { value: '10:00-11:00', isAvailable: true, viewValue: '10:00-11:00' },
  ]

  constructor(private fb: FormBuilder, private _bottomSheet: MatBottomSheet) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      work: ['', Validators.required],
      worker: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      information: ['']
    })
  }

  get f() { return this.appointmentForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    this.appointment = {
      date: this.appointmentForm.value.date,
      work: this.appointmentForm.value.work,
      worker: this.appointmentForm.value.worker,
      time: this.appointmentForm.value.time,
      name: this.appointmentForm.value.name,
      email: this.appointmentForm.value.email,
      phone: this.appointmentForm.value.phone,
      information: this.appointmentForm.value.information
    }
    console.log(this.appointment);
    this.openBottomSheet();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(InfoPopUp, {
      data: this.appointment
    });
  }

onResize(event) {
  const element = event.target.innerWidth;
  console.log(element);
  
  if (element < 1219) {
    this.cols = 1;
  }

  if (element > 1219) {
    this.cols = 2;
  }

  if (element < 750) {
    this.cols = 1;
  }
}

}

@Component({
  selector: 'info-pop-up',
  templateUrl: 'info-pop-up.html',
  styleUrls: ['./appointment.component.css']
})
export class InfoPopUp {

  constructor(private _bottomSheetRef: MatBottomSheetRef<InfoPopUp>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}




