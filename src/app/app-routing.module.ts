import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './register/reg/reg.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { Acct1Component } from './acct1/acct1.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'#', redirectTo:'page not found'},
  // {path: '', component: LogComponent },
  {path:'login', component: LogComponent},
  {
    path:'registerr', component: RegComponent
  },
  {path: 'home', component: HomepageComponent},
  {
    path:'acct1', component: Acct1Component
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
