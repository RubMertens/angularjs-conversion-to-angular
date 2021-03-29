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
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    RouterModule.forRoot([
      { path: '', redirectTo: 'phones', pathMatch: 'full' },
      { path: 'phones', component: PhoneListComponent },
      { path: 'phones/:phoneId', component: PhoneDetailComponent }
    ])

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private upgrade: UpgradeModule) {

  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    // this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
