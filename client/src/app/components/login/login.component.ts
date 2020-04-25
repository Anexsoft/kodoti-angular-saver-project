import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login.model';
import { IdentityService } from 'src/app/services/identity.service';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public model: LoginModel = new LoginModel();
  public invalid: boolean;

  constructor(
    private identityService: IdentityService,
    private userStorageService: UserStorageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let self = this;

    this.identityService
      .signIn(this.model)
      .subscribe({
        next(data) {
          self.userStorageService.set(data);
          self.router.navigate(['/']);
        },
        error() {
          self.invalid = true;
        }
      });
  }
}
