import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './register/reg/reg.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Acct1Component } from './acct1/acct1.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    RegComponent,
    HomepageComponent,
    Acct1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
