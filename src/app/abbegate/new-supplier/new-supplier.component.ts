import { Component } from '@angular/core';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrl: './new-supplier.component.css'
})
export class NewSupplierComponent {

contactInfo: any;

  removeContactInfo(index: number) {
    console.log(index)
  }

  addContactInfo() {
    
  }

}
