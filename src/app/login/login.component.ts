import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../service/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  validCredentials:boolean = false;
  enterCredentials:boolean = false

  constructor(private router: Router, private service:ConnectionService) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
   }

  ngOnInit(): void {
    
  }

  login(): void {
    if(this.loginForm.valid) {
      this.validCredentials = false;
      this.enterCredentials = false;
      const data = this.loginForm.getRawValue();
      this.loginForm.reset();
      this.service.checkCredentials(data).subscribe(response => {
      if(response) {
        this.router.navigate(['/abbegate']);
      } else {
        this.validCredentials = true;
      }
    });
    } else {
      this.enterCredentials = true;
    }
  }
}
