import { Component, OnInit } from '@angular/core';
import { OutcomeCreateModel } from '../../../services/models/outcome-create.model';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { OutcomeService } from 'src/app/services/outcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outcome-create',
  templateUrl: './outcome-create.component.html',
  styleUrls: ['./outcome-create.component.css']
})
export class OutcomeCreateComponent implements OnInit {
  public model: OutcomeCreateModel = new OutcomeCreateModel();
  public loading: boolean = false;

  constructor(
    private userStorageService: UserStorageService,
    private outcomeService: OutcomeService,
    private router: Router) { }

  ngOnInit(): void {
    this.model.user_id = this.userStorageService.user.id;
  }

  onSubmit(): void {
    this.loading = true;

    this.outcomeService.create(this.model)
      .subscribe(() => {
        this.router.navigate(['/outcomes']);
      });
  }

}
