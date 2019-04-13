import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;

  constructor( private router: Router  ) { }

  ngOnInit() {
  }

  onChoseLocation( event ){
    console.log( event );
  }
  onContinuePayment(){
    this.router.navigate(['/payment'])
  }

}
