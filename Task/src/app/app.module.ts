import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ShippingComponent,
    PaymentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
