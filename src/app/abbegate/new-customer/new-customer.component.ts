import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConnectionService } from '../../service/connection.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  selectedFiles: File[] = [];
  groups: any;
  category: any;
  customerForm !: FormGroup;
  customerData: any;

  constructor(private fb: FormBuilder, private service: ConnectionService,private router: Router,private messageService: MessageService) {
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

    this.customerForm = this.fb.group({
      personalInfo: this.fb.group({
        name: [''],
        email: [''],
        phoneNumber: ['']
      }),
      addressInfo: this.fb.group({
        address: [''],
        city: [''],
        country: [''],
        zipCode: ['']
      }),
      group: [''],
      category: ['']
    });
  }

onFileSelected(event: any): void {
  if (event.target.files) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file: File = event.target.files[i];
      this.selectedFiles.push(file);
    }
  } 
}

unSelectFile(file: File): void {
  const index = this.selectedFiles.indexOf(file);
  if (index !== -1) {
    this.selectedFiles.splice(index, 1);
  }
}

saveCustomerDetails(): void {
  console.log(this.customerForm.getRawValue())
  const data = this.customerForm.getRawValue();
  this.service.setCustomerDetails(data).subscribe(response => {
    this.customerData = data;
    this.messageService.add({
      severity: 'success',
      summary: 'Customer created successfully',
      life: 3000 // Adjust the toast display duration as needed
    });
    this.customerForm.reset();
    setTimeout(() => {
      this.router.navigate(['/abbegate/viewCustomer']);
    },1000); 
  });
}
}
