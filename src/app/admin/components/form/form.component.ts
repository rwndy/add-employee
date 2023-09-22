import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
   
    if (this.username === 'admin' && this.password === 'wandiganteng') {
    
      this.router.navigate(['employees']);
    } else {
      this.showError = true;
      this.errorMessage = 'Incorrect username or password';
    }
  }

  onUsernameChange() {
    this.showError = false;
  }

  onPasswordChange() {
    this.showError = false;
  }
}