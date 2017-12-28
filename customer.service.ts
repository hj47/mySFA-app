import { Customer } from './Customer';
import { Customers } from './mock-customers';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers(): Customer[] {
    return Customers;
  }
}
