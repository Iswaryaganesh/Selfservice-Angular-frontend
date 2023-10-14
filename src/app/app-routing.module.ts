import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './register/reg/reg.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { Acct1Component } from './acct1/acct1.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { RouterComponent } from './router/router.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { RouterpageComponent } from './routerpage/routerpage.component';
import { MattableComponent } from './mattable/mattable.component';

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
    path:'acct1', component: Acct1Component
  },
  {path:'profile',component:ProfileComponent},
  {path:'plans',component:PlansComponent},
  {path:'router',component:RouterComponent},
  {path:'forgotPassword',component:ForgotpwdComponent},
  {path:'routerpage',component:RouterpageComponent},
  {path:'mattable',component:MattableComponent}

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
