import { Component } from '@angular/core';
import { ConnectionService } from '../service/connection.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  details:any;
  userId: number | null = null;
  loggedInUser: any;

  constructor(private service:ConnectionService) {
    this.userId = this.service.getUserId();
  }

  ngOnInit() {
    this.getLoggedInUserDetails();
  }

  getLoggedInUserDetails(): void {
    if (this.userId !== null) {
      this.service.getLoggedInUserDetails(this.userId).subscribe((response:any) => {
        if (response.success) {
          this.loggedInUser = response.data;
        } else {
          console.error('Error:', response.message);
        }
      });
    } else {
      console.error('Error: userId is null');
    }
  }
  
}
