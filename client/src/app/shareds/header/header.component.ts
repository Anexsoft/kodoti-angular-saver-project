import { Component, OnInit } from '@angular/core';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userStorageService: UserStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.userStorageService.destroy();
    this.router.navigate(['/login']);
  }
}
