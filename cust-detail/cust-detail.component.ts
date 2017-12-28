import { Customer } from '../Customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styleUrls: ['./cust-detail.component.css']
})
export class CustDetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
