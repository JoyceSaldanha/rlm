import { Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  groups: any;
  department: any;
  supplier:any;
    ngOnInit() {
      this.department=[
        {name:'General Stock Optional Extra'},
        {name:'Inserts'},
        {name:'Covers'},
        {name:'Notesbooks'},
        {name:'Irish stock'},
        {name:'Dated product'},
        {name:'Johnsons'},
        {name:'Leather stock products'},
        {name:'Recycled stock range'},
        {name:'PU Wallets'},
        {name:'PU Gifts'},
        {name:'Aspinals'},
        {name:'MTO Leather/PU'},
        {name:'Made to order Peter Yates'},
        {name:'Componends'},
        {name:'Stock special'},
        {name:'Bespoke'},
        {name:'Gifts'},
        {name:'Written off Saleable Stock'}
      ];

        this.groups = [
            { name: 'Bespoke'},
            { name: 'Catalogue Item'},
            { name: 'Factored' },
            { name: 'Leather'},
            { name: 'Sundry Item' },
            { name: 'Special' }
        ];
    }

}
