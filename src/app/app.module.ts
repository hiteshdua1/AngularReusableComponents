import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { StepCounterComponent } from './step-counter/step-counter.component';
import { LiveCodeComponent } from './live-code/live-code.component';
import { BooksCardComponent } from './books-card/books-card.component';
import { ActivityStreakComponent } from './activity-streak/activity-streak.component';
import { ContentMarkdownComponent } from './content-markdown/content-markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileNameComponent,
    CountdownTimerComponent,
    ProjectsCardComponent,
    StepCounterComponent,
    LiveCodeComponent,
    BooksCardComponent,
    ActivityStreakComponent,
    ContentMarkdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
