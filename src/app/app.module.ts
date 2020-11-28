import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { CustomerInitialsComponent } from './customer-initials/customer-initials.component';

@NgModule({
  declarations: [AppComponent, CustomerInitialsComponent, AccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
