import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
