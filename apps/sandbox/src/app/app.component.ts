import { Component, OnInit, VERSION } from '@angular/core';

declare const APP_VERSION: unknown;

@Component({
  selector: 'angular-nx-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private appVersion = APP_VERSION;
  private angularVersion = VERSION;

  ngOnInit(): void {
    console.log(`Angular: ${this.angularVersion.full}; App version: ${this.appVersion}`);
  }
}
