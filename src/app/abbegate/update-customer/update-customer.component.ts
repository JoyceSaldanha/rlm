import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
  customerForm: FormGroup;
  customerId: any;
  customerFormData: any;
  companyData: any;
  groups: any;
  category: any;
  status: any;
  contactInfoData: any[] = [];
// contactInfoControls: any;

  constructor(private route: ActivatedRoute, private service: CustomerService,private formBuilder: FormBuilder,private router: Router,private messageService: MessageService) {
    this.customerForm = this.formBuilder.group({
      companyInfo: this.formBuilder.group({
        companyName: '',
        companyEmail: '',
        companyPhoneNumber: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        group: '',
        sales: '',
        status: ''
      }),
      contactInfo: this.formBuilder.array([])
    });


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
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.getDetailsById(this.customerId);
  }
  

  getDetailsById(customerId: any): void {
    this.service.getCompanyDetailsById(customerId).subscribe(response => {
      this.customerFormData = response;
      this.companyData = this.customerFormData?.companyData;
      this.contactInfoData = this.customerFormData?.contactInfoData || [];
     this.populateForm();
    })
  }

populateForm(): void {
  if (this.customerForm && this.contactInfoData) {
    this.customerForm.get('companyInfo')?.patchValue({
      companyName: this.companyData.companyName,
      companyEmail: this.companyData.companyEmail,
      companyPhoneNumber: this.companyData.companyPhoneNumber,
      address: this.companyData.address,
      city: this.companyData.city,
      country: this.companyData.country,
      zipCode: this.companyData.zipCode,
      group: this.groups.find((g: { name: any; }) => g.name === this.companyData.group_name),
      sales: this.companyData.sales,
      status: this.status.find((s: { name: any; }) => s.name === this.companyData.status)
    });

    const contactInfoArray = this.customerForm.get('contactInfo') as FormArray;
    this.contactInfoData?.forEach((contact: any) => {
      const categories = contact.category.split(',');
      const mappedCategories = categories.map((categoryName: string) => {
        const foundCategory = this.category.find((cat: { name: string }) => cat.name === categoryName.trim());
        return foundCategory ? foundCategory : null;
      });
      contactInfoArray.push(this.formBuilder.group({
        contactName: contact.contactName,
        contactEmail: contact.contactEmail,
        contactPhoneNumber: contact.contactPhoneNumber,
        category: [mappedCategories.filter((category: any) => category !== null)] // Set initial selected values
      }));
    });
  }
}

addContact(): void {
  const contactInfoArray = this.customerForm.get('contactInfo') as FormArray;
  const newContactGroup = this.createContactGroup();
  contactInfoArray.push(newContactGroup);

  // Update the contactInfoData array
  this.contactInfoData.push({
    contactName: '',
    contactEmail: '',
    contactPhoneNumber: '',
    category: []
  });
}

removeContact(index: number): void {
  const contactInfoArray = this.customerForm.get('contactInfo') as FormArray;
  if (contactInfoArray) {
    contactInfoArray.removeAt(index);
    this.contactInfoData.splice(index, 1);
  }
}

createContactGroup(): FormGroup {
  return this.formBuilder.group({
    contactName: '',
    contactEmail: '',
    contactPhoneNumber: '',
    category: ['']
  });
}

updateCustomerForm() {
  const data = {
    ...this.customerForm.value,
    id: this.customerId
  };
  this.service.updateCompanyData(data).subscribe((response: any) => {
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
  })
}

}