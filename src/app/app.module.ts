import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { StepCounterComponent } from './step-counter/step-counter.component';
import { LiveCodeComponent } from './live-code/live-code.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileNameComponent,
    CountdownTimerComponent,
    ProjectsCardComponent,
    StepCounterComponent,
    LiveCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
