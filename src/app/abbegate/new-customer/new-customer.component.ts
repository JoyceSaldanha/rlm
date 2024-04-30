import { Component } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent {
  selectedFiles: File[] = [];

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
  if (index) {
    this.selectedFiles.splice(index, 1);
  }
}
  
}
