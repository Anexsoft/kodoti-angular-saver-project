import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: DefaultComponent, canActivate: [AuthGuard] },
  {
    path: 'outcomes',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OutcomeListComponent },
      { path: 'create', component: OutcomeCreateComponent },
      { path: ':id/update', component: OutcomeUpdateComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
  // { path: 'outcomes', component: OutcomeListComponent },
  // { path: 'outcomes/create', component: OutcomeCreateComponent },
  // { path: 'outcomes/:id/update', component: OutcomeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
