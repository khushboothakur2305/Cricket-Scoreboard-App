import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from './module/material-module/material-module.module';
@NgModule({
  declarations: [AppComponent, UpcomingMatchesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
