import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InsuredComponent } from './insured/insured.component';
import { CustDetailComponent } from './cust-detail/cust-detail.component';
import { CustomerService } from './customer.service';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    InsuredComponent,
    CustDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
