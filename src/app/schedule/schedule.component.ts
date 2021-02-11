import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  sumbitted:boolean;
  formControls = this.customerService.form.controls;
  ngOnInit() {
  }
  onSubmit(){
    this.sumbitted = true
    if (this.customerService.form.get('$key').value == null  ){
      this.sumbitted = false
    }
  }

}
