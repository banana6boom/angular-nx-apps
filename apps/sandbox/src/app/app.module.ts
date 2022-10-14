import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { ExtModules, runtimeChecks } from '../build-specifics';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const NgrxModules = [
  StoreModule.forRoot({}, { runtimeChecks }),
  StoreRouterConnectingModule.forRoot({}),
  EffectsModule.forRoot([]),
  ExtModules,
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, ...NgrxModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
