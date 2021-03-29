'use strict';

import { Phone } from "./phone.service";
import { downgradeInjectable } from "@angular/upgrade/static";

// Define the `core.phone` module
angular.module('core.phone', ['ngResource'])
  .factory('Phone', downgradeInjectable(Phone))
  ;
