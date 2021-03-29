// 'use strict';

import { Component } from '@angular/core';
import { Phone } from '../core/phone/phone.service';

// // Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: 'app/phone-list/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//         Phone.query().subscribe(phones => this.phones = phones);
//         this.orderProp = 'age';
//       }
//     ]
//   });


@Component({
  selector: "phone-list",
  templateUrl: './phone-list.component.html'
})
export class PhoneListComponent {
  constructor(phone: Phone) {
    phone.query().subscribe(phones => this.phones = phones);
  }

  phones: any[];
  orderProp = 'age';
  query: string;
}
