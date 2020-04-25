import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OutcomeModel } from './models/outcome.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { OutcomeCreateModel } from './models/outcome-create.model';
import { OutcomeUpdateModel } from './models/outcome-update.model';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http: HttpClient) { }

  getAll(year: number, month: number, userId: string): Observable<OutcomeModel[]> {
    return this.http.get<OutcomeModel[]>(`${environment.apiUrl}outcomes?year=${year}&month=${month}&user_id=${userId}`);
  }

  get(id: string): Observable<OutcomeModel> {
    return this.http.get<OutcomeModel>(`${environment.apiUrl}outcomes/${id}`);
  }

  create(model: OutcomeCreateModel): Observable<{}> {
    return this.http.post(`${environment.apiUrl}outcomes`, model);
  }

  delete(id: string): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}outcomes/${id}`);
  }

  update(id: string, model: OutcomeUpdateModel): Observable<{}> {
    return this.http.put(`${environment.apiUrl}outcomes/${id}`, model);
  }


}
