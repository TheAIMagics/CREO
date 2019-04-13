import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

import { CartComponent } from './cart/cart.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ShippingComponent,
    PaymentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAVTl8BXKlG4v1jE2yqXcGmosJHbbWhX0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
