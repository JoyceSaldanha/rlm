import { Component } from '@angular/core';
import { ConnectionService } from '../service/connection.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  details:any;
  constructor(private service:ConnectionService) {
    
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.service.getLoginDetails().subscribe((response) => {
      this.details = response.data[0];
    })
  }
}
