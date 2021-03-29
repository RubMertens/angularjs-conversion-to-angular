import { Phone } from './../core/phone/phone.service';
import { Component, Inject } from '@angular/core';
// 'use strict';

// // Register `phoneDetail` component, along with its associated controller and template
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'app/phone-detail/phone-detail.template.html',
//     controller: ['$routeParams', 'Phone',
//       function PhoneDetailController($routeParams, Phone) {
//         var self = this;
//         Phone.get($routeParams.phoneId).subscribe(phone => {
//           self.phone = phone;
//           self.setImage(phone.images[0]);
//         })
//         // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//         //   self.setImage(phone.images[0]);
//         // });

//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };
//       }
//     ]
//   });


@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  phone: any;
  mainImageUrl: string;

  constructor(phoneService: Phone, @Inject('$injector') injector) {
    const phoneId = injector.get('$routeParams')?.phoneId;
    phoneService.get(phoneId)
      .subscribe(data => {
        this.phone = data;
        this.mainImageUrl = this.phone.images[0];
      });
  }
  setImage(image: string) {
    this.mainImageUrl = image;
  }
}
