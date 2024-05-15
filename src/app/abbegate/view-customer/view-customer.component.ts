import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {
  customerDetails: any;
  showEditDialog: boolean = false;
  editData: any;
  groups: any;
  category: any;
  firstIndex: number = 0;
  rows: number = 10;
  totalRecordsCount: number = 0;
  showSearchFields: boolean = false;
  inputValue: string = '';

  customerFormData: any;
  constructor(private customerService: CustomerService,private messageService: MessageService, private router: Router) {

  }

  ngOnInit(): void {
    // this.getDetails();

    this.getCustomerFormDetails();
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
  }

  getCustomerFormDetails(): void {
    this.customerService.getCustomerFormData().subscribe((response: any) => {
      this.customerFormData = response;
      this.totalRecordsCount = this.customerFormData.companyData.length;
    })
  }

  deleteCustomer(data: any): void {
    this.customerService.deleteCompanyData(data.id).subscribe((response: any) => {
      if(response.success == true) {
        this.messageService.add({
              severity: 'success',
              summary: 'Customer deleted successfully',
              life: 3000 // Adjust the toast display duration as needed
            });
        setTimeout(() => {
             this.getCustomerFormDetails();
            },1000);
      }
    });
  }

  editCustomerDetails(data: any): void {
    this.router.navigate(['/abbegate/updateCustomer',data.id]);
  }

    closeDialog(): void {
      this.showEditDialog = false;
    }

    toggleSeachInput(): void {
      this.showSearchFields = !this.showSearchFields;
    }

    search() {
      if (!this.inputValue) {
        this.getCustomerFormDetails();
      } else {
        // Filter the table data based on the searchText
        this.filterTableData();
      }
    }

    filterTableData() {
      this.customerFormData.companyData = this.customerFormData.companyData.filter((profile: any) => profile.companyName.toLowerCase().includes(this.inputValue));
    }
}
