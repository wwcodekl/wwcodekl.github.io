import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { HelperListComponent } from './helper-list/helper-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    SponsorListComponent,
    HelperListComponent,
    ContactListComponent,
    FeatureListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
