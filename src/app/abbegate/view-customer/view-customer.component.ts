import { Component } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {

  customerDetails: any;
  constructor(private service: ConnectionService) {

  }

  ngOnInit(): void {
    this.service.getCustomerDetails().subscribe(data => {
      this.customerDetails = data;
      console.log(this.customerDetails)
    })
  }
}
