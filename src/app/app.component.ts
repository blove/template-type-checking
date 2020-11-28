import { Component } from '@angular/core';

import { accounts, customers, orders } from '../../data/data.json';
import { Account, Customer } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Customer[] = customers;

  // todo: specify return type
  accountForCustomer(customer: Customer): Account | null {
    // todo: return account
    return accounts.find(account => account.customerId === customer.id) ?? null;
  }

  onAmountChange(amount: number): void {
    console.log(amount);
  }
}
