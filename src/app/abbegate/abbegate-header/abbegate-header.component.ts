import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-abbegate-header',
  templateUrl: './abbegate-header.component.html',
  styleUrl: './abbegate-header.component.css'
})
export class AbbegateHeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Sales',
              icon: 'pi pi-chart-line',
              items: [
                  {
                      label: 'Quotes',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {
                              label: 'Live',
                              icon: 'pi pi-fw pi-bookmark'
                          },
                          {
                              label: 'Completed',
                              icon: 'pi pi-check'
                          },
                          {
                            label: 'New Quote',
                            icon: 'pi pi-external-link'
                        }
                      ]
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Orders',
                      icon: 'pi pi-sort-alt-slash',
                      items: [
                        {
                            label: 'Live',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Completed',
                            icon: 'pi pi-check'
                        },
                        {
                          label: 'New Order',
                          icon: 'pi pi-external-link'
                      }
                    ]
                  },
                  {
                    separator: true
                },
                {
                  label: 'Customer',
                  icon: 'pi pi-users',
                  items: [
                    {
                        label:'Create',
                        icon: 'pi pi-user-plus',
                        routerLink: ['/abbegate/newCustomer']
                    },{
                        label:'View',
                        icon: 'pi pi-user',
                        routerLink: ['/abbegate/viewCustomer']
                    }
                  ]
                }
              ]
          },
          {
              label: 'Catalogue',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Product',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Stock entries',
                      icon: 'pi pi-fw pi-align-right'
                  }
              ]
          },
          {
              label: 'Users',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'User Profile',
                      icon: 'pi pi-fw pi-user-plus',
                      routerLink: ['/abbegate/profile']
                  }
              ]
          },
          // {
          //     label: 'Events',
          //     icon: 'pi pi-fw pi-calendar',
          //     items: [
          //         {
          //             label: 'Edit',
          //             icon: 'pi pi-fw pi-pencil',
          //             items: [
          //                 {
          //                     label: 'Save',
          //                     icon: 'pi pi-fw pi-calendar-plus'
          //                 },
          //                 {
          //                     label: 'Delete',
          //                     icon: 'pi pi-fw pi-calendar-minus'
          //                 }
          //             ]
          //         },
          //         {
          //             label: 'Archieve',
          //             icon: 'pi pi-fw pi-calendar-times',
          //             items: [
          //                 {
          //                     label: 'Remove',
          //                     icon: 'pi pi-fw pi-calendar-minus'
          //                 }
          //             ]
          //         }
          //     ]
          // },
          {
              label: 'Log out',
              icon: 'pi pi-fw pi-power-off',
              routerLink: ['/login']
          }
      ];
  }
}
