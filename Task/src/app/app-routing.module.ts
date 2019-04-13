
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes : Routes=[
    { path :'', component: CustomerComponent},
    { path :'shipping', component: ShippingComponent},
    { path :'payment', component: PaymentComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports:[ RouterModule]
})
export class AppRoutingModule{

}