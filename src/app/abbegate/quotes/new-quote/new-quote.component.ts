import { Component } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.css'
})
export class NewQuoteComponent {
  quote: any;

  ngOnInit() {
    this.quote = [
        { name: 'Advantage' },
        { name: 'Customer New Enquiry'},
        { name: 'Customer Repeat'},
        { name: 'Email Mailer'},
        { name: 'Encore'},
        { name: 'Follow Up'},
        { name: 'Ignite'},
        { name: 'Internal'},
        { name: 'New Enquiry'},
        { name: 'Page'},
        { name: 'Show Enquiry'},
        { name: 'Sourcing City'},
        { name: 'Visit/Meeting'},
        { name: 'Website Enquiry'}
    ];
}
}
