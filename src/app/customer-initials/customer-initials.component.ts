import { Component, Input } from '@angular/core';

import { Customer } from '../models';

@Component({
  selector: 'app-customer-initials',
  templateUrl: './customer-initials.component.html',
  styleUrls: ['./customer-initials.component.scss']
})
export class CustomerInitialsComponent {
  @Input() customer: Customer | null = null;
}
