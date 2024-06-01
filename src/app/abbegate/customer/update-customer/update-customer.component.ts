import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  constructor(private http: HttpClient, private route: ActivatedRoute, private confirmationService: ConfirmationService, private service: CustomerService,private formBuilder: FormBuilder,private router: Router,private messageService: MessageService) {
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

updateConfirmCustomer(event:any):void{
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Are you sure that you want to Update?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon:"none",
    rejectIcon:"none",
    rejectButtonStyleClass:"p-button-text",
    accept: () => {
        this.updateCustomerForm();
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
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
            summary: 'Customer updated successfully',
            life: 3000 // Adjust the toast display duration as needed
          });
      this.customerForm.reset();
      setTimeout(() => {
            this.router.navigate(['/abbegate/viewCustomer']);
          },1000);
    }
  })
}

closeUpdate(): void {
  this.router.navigate(['/abbegate/viewCustomer']);
}

pdfDownload(): void {
  const data = this.customerForm.getRawValue();
  console.log(data);
  this.getHtml(data).subscribe((html: string) => {
    const doc = new jsPDF();
    doc.html(html, {
      x: 15,
      y: 15,
      width: 170,
      windowWidth: 650,
      callback: (doc) => {
        const blob = doc.output('blob');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        document.body.appendChild(iframe);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '1px';
        closeButton.style.zIndex = '999';
        closeButton.style.padding = '5px';
        closeButton.addEventListener('click', () => {
          document.body.removeChild(iframe);
          document.body.removeChild(closeButton);
        });
        document.body.appendChild(closeButton);

      }
    });
  });
}

getHtml(data: any): Observable<string> {
  return this.http.get('assets/templates/pdf-template.html', { responseType: 'text' }).pipe(
    map((html: string) => {
      html = html.replace('{{companyName}}', data.companyInfo.companyName)
                  .replace('{{companyEmail}}', data.companyInfo.companyEmail)
                  .replace('{{companyPhoneNumber}}', data.companyInfo.companyPhoneNumber)
                  .replace('{{address}}', data.companyInfo.address)
                  .replace('{{city}}', data.companyInfo.city)
                  .replace('{{country}}', data.companyInfo.country)
                  .replace('{{zipCode}}', data.companyInfo.zipCode)
                  .replace('{{group}}', data.companyInfo.group.name)
                  .replace('{{sales}}', data.companyInfo.sales)
                  .replace('{{status}}', data.companyInfo.status.name);

                  // Generate the contact info table rows
      let contactInfoHtml = '';
      data.contactInfo.forEach((contact: any) => {
        contactInfoHtml += `
          <tr >
            <td style="border: 1px solid black;padding: 8px;">${contact.contactName}</td>
            <td style="border: 1px solid black;padding: 8px;">${contact.contactEmail}</td>
            <td style="border: 1px solid black;padding: 8px;">${contact.contactPhoneNumber}</td>
            <td style="border: 1px solid black;padding: 8px;">${contact.category.map((category: any) => category.name).join(', ')}</td>
          </tr>
        `;
      });
      html = html.replace('{{contactInfo}}', contactInfoHtml);

      return html;
    })
  );
}

}
