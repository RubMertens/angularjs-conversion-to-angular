import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    UpgradeModule,
    HttpClientModule
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
