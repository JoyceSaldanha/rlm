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

  // getDetails() {
  //   this.customerService.getCustomerDetails().subscribe(data => {
  //     this.customerDetails = data;
  //   });
  // }

//   deleteRow(rowData: any): void {
// console.log(rowData)
//     // this.customerDetails.splice(rowData.id, 1);
//     // this.customerService.deleteCustomer(rowData.id).subscribe( (response) => {
//       //  this.getDetails();
//       // });
//     }

    // editRowData(rowData: any): void {
    //   if (rowData) {
    //     this.editData = { ...rowData };
    //     const selectedGroup = this.groups.find((group: any) => group.name === rowData.group_name);
    // // Set the selected group object to editData
    // this.editData.group_name = selectedGroup;
    //     if (typeof rowData.category === 'string') {
    //       // If category is provided as a string with comma-separated values
    //       this.editData.category = rowData.category.split(',').map((categoryName: string) => categoryName.trim())
    //         .map((categoryName: string) => this.category.find((category: any) => category.name === categoryName))
    //         .filter((category: any) => category); // Remove undefined entries
    //     } else {
    //       const selectedCategory = this.category.find((category: any) => category.name === rowData.category);
    //       this.editData.category = selectedCategory ? [selectedCategory] : [];
    //     }
    //     this.showEditDialog = true;
    //   } else {
    //     console.log("No data to edit");
    //   }
    // }
    
    // updateCustomerProfile(data: any): void {
    //   console.log(data)
    //   this.customerService.updateCustomer(data).subscribe((response) => {
    //     if(response.success == true) {
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Customer updated successfully',
    //         life: 3000 // Adjust the toast display duration as needed
    //       }); 
    //       setTimeout(() => {
    //         this.showEditDialog = false;
    //         // this.getDetails();
    //       },1000); 
    //     }
    //   });
    // }

  getCustomerFormDetails(): void {
    this.customerService.getCustomerFormData().subscribe((response: any) => {
      this.customerFormData = response;
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
}
