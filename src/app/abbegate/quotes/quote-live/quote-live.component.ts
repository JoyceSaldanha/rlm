import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-live',
  templateUrl: './quote-live.component.html',
  styleUrl: './quote-live.component.css'
})
export class QuoteLiveComponent implements OnInit{
  products: any;
  isDetails: boolean = false;
  isEmailDialog: boolean= false;
  to: string[] = [];
  cc: string[] = [];

  ngOnInit(): void {
    this.products = [
      {
        code:123,
        name:'joyce',
        category:'aaa',
        group:'test'
      },
      {
        code:999,
        name:'dhanya',
        category:'vvv',
        group:'sample'
      }
    ]
  }

  openDetails(): void {
    this.isDetails = true;
  }

  openEmailDialog(): void {
    this.isEmailDialog = true;
  }

  onRecipientAdded(event: any) {
    if (this.isValidEmail(event.value) && !this.to.includes(event.value)) {
      this.to.push(event.value);
    }
  }

  onCCAdded(event: any) {
    if (this.isValidEmail(event.value) && !this.cc.includes(event.value)) {
      this.cc.push(event.value);
    }
  }
  
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  removeRecipient(email: string) {
    this.to = this.to.filter(e => e !== email);
  }

  sendEmail(): void {
    
  }
}
