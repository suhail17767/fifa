import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchScheduleComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
