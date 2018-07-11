import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileNameComponent,
    CountdownTimerComponent,
    ProjectsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
