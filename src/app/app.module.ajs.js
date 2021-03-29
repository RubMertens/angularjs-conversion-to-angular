'use strict';

import "angular-animate";
import "angular-route";
import "angular-resource";

// import "./app.animations"

import "./core/core.module";
import "./core/checkmark/checkmark.filter";
import "./core/phone/phone.module";
import "./core/phone/phone.service";

import "./phone-list/phone-list.module";
import "./phone-list/phone-list.component"

import "./phone-detail/phone-detail.module";
import "./phone-detail/phone-detail.component";

// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
