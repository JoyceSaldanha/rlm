import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SupplierService } from '../../service/supplier.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrl: './new-supplier.component.css'
})
export class NewSupplierComponent implements OnInit{

contactInfo: any;
supplierForm !: FormGroup;
supplierContactInfo: FormArray;
supplierData: any;

constructor(private formBuilder: FormBuilder, private service: SupplierService, private messageService: MessageService, private router: Router) {
  this.supplierContactInfo = this.formBuilder.array([
    this.formBuilder.group({
      contactName: [''],
      contactEmail: [''],
      contactPhoneNumber: ['']
    })
  ]);
}

ngOnInit(): void {
  this.supplierForm = this.formBuilder.group({
    supplierInfo: this.formBuilder.group({
      supplierName: [''],
      supplierEmail: [''],
      supplierAddress: [''],
      zipCode: [''],
      phoneNumber: [''],
      additionalInfo: [''],
      subContractor: [false],
    }),
    supplierContactInfo: this.supplierContactInfo
  });
}

  removeContactInfo(index: number) {
    this.supplierContactInfo.removeAt(index);
  }

  addContactInfo() {
    this.supplierContactInfo.push(
      this.formBuilder.group({
        contactName: [''],
        contactEmail: [''],
        contactPhoneNumber: ['']
      })
    );
  }

  createSupplier(): void {
    const formData = this.supplierForm.getRawValue();
    this.service.saveSupplierDetails(formData).subscribe((response: any) => {
      if(response.success == true) {
        this.messageService.add({
              severity: 'success',
              summary: 'Supplier created successfully',
              life: 3000
            });
            this.supplierForm.reset();
        setTimeout(() => {
             this.router.navigate(['abbegate/viewSupplier'])
            },1000);
      }
    });
  }

}
