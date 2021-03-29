import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckMarkPipe } from './phone-detail/checkmark.pipe';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckMarkPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    UpgradeModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private upgrade: UpgradeModule) {

  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
