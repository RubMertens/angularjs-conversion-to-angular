// 'use strict';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource) {
//       return $resource('assets/phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);


@Injectable(
  {
    providedIn: 'root'
  }
)
export class Phone {
  constructor(private http: HttpClient) { }
  query(): Observable<any> {
    return this.http.get('assets/phones/phones.json');
  }
  get(id: string) {
    return this.http.get(`assets/phones/${id}.json`);
  }
}
