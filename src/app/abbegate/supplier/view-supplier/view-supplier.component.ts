import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../service/supplier.service';
import { __values } from 'tslib';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrl: './view-supplier.component.css'
})
export class ViewSupplierComponent implements OnInit{
  supplierFormData: any;
  showSearchFields: boolean = false;
  name: string = '';id: any
  email: string = '';
  address: string = '';
  zipcode: any;
  phoneNumber:any;
  subcontractor: any;

  constructor(private service: SupplierService, private confirmationService: ConfirmationService,private messageService: MessageService, private router: Router) {

  }

  ngOnInit(): void {
    this.getSupplierDetails();
  }

  toggleSeachInput(): void {
    this.showSearchFields = !this.showSearchFields;
  }

  getSupplierDetails(): void {
    this.service.getSupplierFormData().subscribe((response:any) => {
      this.supplierFormData = response;
    });
  }

  search(value: any) {
    if (!value) {
      this.getSupplierDetails();
    } else {
      this.filterTableData(value);
    }
  }

  filterTableData(value: any) {
    console.log(value)
    this.supplierFormData.supplierData = this.supplierFormData.supplierData.filter((profile: any) => {
      console.log(profile)
      let subcontractorValue = profile.subcontractor === "1" ? "Yes" : "No";
      return (
        profile.name.toLowerCase().includes(value.toLowerCase()) ||
        profile.email.toLowerCase().includes(value.toLowerCase()) ||
        profile.address.toLowerCase().includes(value.toLowerCase()) ||
        profile.zip_code.toString().includes(value) ||
        profile.contact_number.toLowerCase().includes(value.toLowerCase()) ||
        subcontractorValue.toLowerCase().includes(value.toLowerCase())
      );
    });
  }

deleteConfirmSupplier(event :any, id:number){
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Are you sure that you want to delete?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon:"none",
    rejectIcon:"none",
    rejectButtonStyleClass:"p-button-text",
    accept: () => {
        this.deleteSupplierDetails(id);
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
});
}

  deleteSupplierDetails(id: number): void {
    this.service.deleteSupplierDetails(id).subscribe((response: any) => {
      if (response.success === true) {
        this.messageService.add({
          severity: 'success',
          summary: 'Supplier deleted successfully',
          life: 3000 
        });
        setTimeout(() => {
          this.getSupplierDetails();
        }, 1000);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error deleting supplier',
              life: 3000 
            });
          }
        }
      );
    }

    editSupplierDetails(data: any): void {
      this.router.navigate(['/abbegate/updateSupplier',data.id]);
    }

}

