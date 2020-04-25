import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutcomeModel } from 'src/app/services/models/outcome.model';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-outcome-detail',
  templateUrl: './outcome-detail.component.html',
  styleUrls: ['./outcome-detail.component.css']
})
export class OutcomeDetailComponent implements OnInit {
  public model: OutcomeModel;

  @Input()
  set entry(model: OutcomeModel) {
    this.model = model;
  }

  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor(private outcomeService: OutcomeService) { }

  ngOnInit(): void {
  }

  delete() {
    if (!confirm('Esta seguro de realizar esta acción'))
      return;

    this.outcomeService.delete(this.model.id)
      .subscribe(() => {
        this.remove.next(this.model.id);
      });
  }
}
