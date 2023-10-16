import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './register/reg/reg.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { Acct1Component } from './acct1/acct1.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { RouterpageComponent } from './routerpage/routerpage.component';
import { MattableComponent } from './mattable/mattable.component';
import { BlockedtableComponent } from './blockedtable/blockedtable.component';
import { FaqComponent } from './faq/faq.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'#', redirectTo:'page not found'},
  {path: '', component: LogComponent },
  {path:'login', component: LogComponent},
  {
    path:'registerr', component: RegComponent
  },
  {path: 'home', component: HomepageComponent},
  {
    path:'acct1', component: Acct1Component, canActivate:[authGuard]
  },
  {path:'profile',component:ProfileComponent, canActivate:[authGuard]},
  {path:'plans',component:PlansComponent, canActivate:[authGuard]},
  {path:'forgotPassword',component:ForgotpwdComponent, canActivate:[authGuard]},
  {path:'routerpage',component:RouterpageComponent, canActivate:[authGuard]},
  {path:'mattable',component:MattableComponent, canActivate:[authGuard]},
  {path:'blockedtable',component:BlockedtableComponent, canActivate:[authGuard]},
  {path:'faq',component:FaqComponent}

];
const routerOptions:ExtraOptions = {
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled',
}


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
