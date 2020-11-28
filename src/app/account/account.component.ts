import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Account } from '../models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input() account: Account | null = null;

  // todo: fix generic type
  @Output() amountChange = new EventEmitter<string>();
}
