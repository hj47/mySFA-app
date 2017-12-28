import { Customer } from '../Customer';
import { Customers } from '../mock-customers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insured',
  templateUrl: './insured.component.html',
  styleUrls: ['./insured.component.css']
})
export class InsuredComponent implements OnInit {

  customers = Customers;

  selectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
