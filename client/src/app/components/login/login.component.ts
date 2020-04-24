import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login.model';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public model: LoginModel = new LoginModel();
  public invalid: boolean;

  constructor(
    private identityService: IdentityService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let self = this;

    this.identityService
      .signIn(this.model)
      .subscribe({
        next(data) {
          console.log(data);
        },
        error() {
          self.invalid = true;
        }
      });
  }
}
