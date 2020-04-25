import { Component, OnInit } from '@angular/core';
import { OutcomeService } from 'src/app/services/outcome.service';
import { OutcomeModel } from 'src/app/services/models/outcome.model';
import { UserStorageService } from 'src/app/services/user-storage.service';

@Component({
  selector: 'app-outcome-list',
  templateUrl: './outcome-list.component.html',
  styleUrls: ['./outcome-list.component.css']
})
export class OutcomeListComponent implements OnInit {
  public items: OutcomeModel[] = [];

  public year: number;
  public month: number;

  public months: Array<{}> = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' }
  ];

  public years: Array<number> = [];

  constructor(
    private outcomeService: OutcomeService,
    private userStorageService: UserStorageService
  ) { }

  ngOnInit(): void {
    let now = new Date();

    // define selectors
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;

    // set array of years
    this.years.push(this.year);

    // retrieve data
    this.getAll();
  }

  removeDeletedOutcome(id: string): void {
    this.items = this.items.filter(x => x.id != id);
  }

  getAll(): void {
    let request = this.outcomeService.getAll(
      this.year,
      this.month,
      this.userStorageService.user.id);

    request.subscribe((data) => {
      this.items = data;
    });
  }
}
