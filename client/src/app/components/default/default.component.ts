import { Component, OnInit } from '@angular/core';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { SessionUserModel } from '../login/models/session-user.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public user: SessionUserModel;

  constructor(private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    this.user = this.userStorageService.user;
  }

}
