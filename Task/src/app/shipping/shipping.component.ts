import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

  onChoseLocation( event ){
    console.log( event );
  }

}
