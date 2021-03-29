'use strict';

import { downgradeComponent } from "@angular/upgrade/static";
import { PhoneListComponent } from "./phone-list.component";

// Define the `phoneList` module
angular.module('phoneList', ['core.phone'])
  .directive('phoneList', downgradeComponent({component: PhoneListComponent}))
  ;
