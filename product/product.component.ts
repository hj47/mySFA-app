import { Customer } from '../Customer';
import { Products } from '../mock-products';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() customer: Customer;

  products = Products;

  constructor() { }

  ngOnInit() {
  }

}
