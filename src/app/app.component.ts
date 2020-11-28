import { Component } from '@angular/core';

import { accounts, customers, orders } from '../../data/data.json';
import { Customer } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Customer[] = customers;

  // todo: specify return type
  accountForCustomer(customer: Customer) {
    // todo: return account
    return orders.find(account => account.customerId === customer.id);
  }

  onAmountChange(amount: string): void {
    console.log(amount);
  }
}
