import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  groups: any;
  category: any;
  status: any;
  customerForm !: FormGroup;
  customerData: any;
  contactInfo: FormArray;

  constructor(private fb: FormBuilder, private customerService: CustomerService,private router: Router,private messageService: MessageService) {
    this.contactInfo = this.fb.array([this.createContactInfo()]);
  }

  ngOnInit() {
    this.groups = [
        { name: 'Abbegate' },
        { name: 'Promo Presence' },
        { name: 'PUP Exports'}
    ];

    this.category = [
      { name: 'General' },
      { name: 'Sales' },
      { name: 'CEO'},
      { name: 'Accounts'}
  ];

this.status = [
        { name: 'Customer' },
        { name: 'Prospect' },
        { name: 'Trash'}
    ];

    this.customerForm = this.fb.group({
      companyInfo: this.fb.group({
        companyName: [''],
        companyEmail: [''],
        companyPhoneNumber: [''],
        address: [''],
        city: [''],
        country: [''],
        zipCode: [''],
        group: [''],
        sales: [''],
        status: [''],
      }),
      contactInfo: this.contactInfo
    });
  }

  createContactInfo(): FormGroup {
    return this.fb.group({
      contactName: [''],
      contactEmail: [''],
      contactPhoneNumber: [''],
      category: ['']
    });
  }

  addContactInfo(): void {
    const contactInfo = this.customerForm.get('contactInfo') as FormArray;
    contactInfo.push(this.createContactInfo());
  }

  removeContactInfo(index: number): void {
    const contactInfo = this.customerForm.get('contactInfo') as FormArray;
    contactInfo.removeAt(index);
  }


saveCustomerDetails(): void {
  const data = this.customerForm.getRawValue();
  this.customerService.saveCustomerForm(data).subscribe((response: any) => {
    if(response.success == true) {
      this.messageService.add({
            severity: 'success',
            summary: 'Customer created successfully',
            life: 3000 // Adjust the toast display duration as needed
          });
      this.customerForm.reset();
      setTimeout(() => {
            this.router.navigate(['/abbegate/viewCustomer']);
          },1000);
    }
  });
}

clearCustomerForm(): void {
  this.customerForm.reset();
}

}
