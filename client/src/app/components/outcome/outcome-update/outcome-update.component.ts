import { Component, OnInit } from '@angular/core';
import { OutcomeService } from 'src/app/services/outcome.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OutcomeUpdateModel } from 'src/app/services/models/outcome-update.model';

@Component({
  selector: 'app-outcome-update',
  templateUrl: './outcome-update.component.html',
  styleUrls: ['./outcome-update.component.css']
})
export class OutcomeUpdateComponent implements OnInit {
  public model: OutcomeUpdateModel = new OutcomeUpdateModel();
  public loading: boolean = false;

  constructor(
    private outcomeService: OutcomeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.outcomeService.get(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.model = data;
        this.loading = false;
      });
  }

  onSubmit(): void {
    this.loading = true;

    this.outcomeService.update(this.route.snapshot.params.id, this.model)
      .subscribe(() => {
        this.router.navigate(['/outcomes']);
      });
  }

}
