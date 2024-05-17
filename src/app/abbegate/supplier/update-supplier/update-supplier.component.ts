import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SupplierService } from '../../../service/supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent implements OnInit{
  supplierForm!: FormGroup;
  supplierId: any;
  supplierFormData: any;
  supplierData: any;
  contactInfoData: any[] = []
  contactInfo: FormArray;

  constructor(private service: SupplierService,private confirmationService: ConfirmationService,private route: ActivatedRoute,private formBuilder: FormBuilder, private router: Router,private messageService: MessageService) {
    this.supplierForm = this.formBuilder.group({
      supplierInfo: this.formBuilder.group({
        supplierName: '',
        supplierEmail: '',
        supplierPhoneNumber: '',
        address: '',
        zipCode: '',
        additionalInfo: '',
        subContractor: false
      }),
      contactInfo: this.formBuilder.array([])
    });
    this.contactInfo = this.supplierForm.get('contactInfo') as FormArray;
  }

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.paramMap.get('id');
    this.getDetailsById();
  }

  
  getDetailsById(): void {
    this.service.getSupplierDetailsById(this.supplierId).subscribe((response: any) => {
      this.supplierFormData = response;
      this.supplierData = this.supplierFormData.supplierData;
      this.contactInfoData =  this.supplierFormData.suppliercontactInfo;
      this.populateForm();
    })
  }

  populateForm(): void {
    if (this.supplierForm) {
      const isSubcontractor = this.supplierData.subcontractor === '1';
      this.supplierForm.get('supplierInfo')?.patchValue({
        supplierName: this.supplierData.name,
        supplierEmail: this.supplierData.email,
        supplierPhoneNumber: this.supplierData.contact_number,
        address: this.supplierData.address,
        additionalInfo: this.supplierData.additional_info,
        zipCode: this.supplierData.zip_code,
        subContractor: isSubcontractor
      });
  
      this.contactInfoData?.forEach((contact: any) => {
        this.contactInfo.push(this.formBuilder.group({
          contactName: contact.name,
          contactEmail: contact.email,
          contactPhoneNumber: contact.phonenumber
        }));
      });
    }
  }

    addContact() {
      const contactInfoArray = this.supplierForm.get('contactInfo') as FormArray;
      const newContactGroup = this.createContactGroup();
      contactInfoArray.push(newContactGroup);

      this.contactInfoData.push({
        contactName: '',
        contactEmail: '',
        contactPhoneNumber: ''
      });
    }

    createContactGroup(): FormGroup {
      return this.formBuilder.group({
        contactName: '',
        contactEmail: '',
        contactPhoneNumber: ''
      });
    }

    removeContact(index: number) {
      const contactInfoArray = this.supplierForm.get('contactInfo') as FormArray;
      if (contactInfoArray) {
        contactInfoArray.removeAt(index);
        this.contactInfoData.splice(index, 1);
      }
    }

updateConfirmSupplier(event:any):void{
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Are you sure that you want to Update?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon:"none",
    rejectIcon:"none",
    rejectButtonStyleClass:"p-button-text",
    accept: () => {
        this.updateSupplierForm();
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
});

}
    updateSupplierForm() {
      const data = {
        ...this.supplierForm.value,
        id: this.supplierId
      };
      this.service.updateSupplierDetails(data).subscribe((response:any) => {
        if(response.success == true) {
          this.messageService.add({
                severity: 'success',
                summary: 'Supplier updated successfully',
                life: 3000 // Adjust the toast display duration as needed
              });
          this.supplierForm.reset();
          setTimeout(() => {
                this.router.navigate(['/abbegate/viewSupplier']);
              },1000);
        }
      })
    }

    closeUpdate(): void {
      this.router.navigate(['/abbegate/viewSupplier']);
    }

}
