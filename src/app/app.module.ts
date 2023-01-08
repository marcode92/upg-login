import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkToLoginComponent } from './link-to-login/link-to-login.component';
import { RedirectToLoginComponent } from './redirect-to-login/redirect-to-login.component';
import { VerifyTicketService } from './verify-ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkToLoginComponent,
    RedirectToLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [VerifyTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
