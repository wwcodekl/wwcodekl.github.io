import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';

const modules = [
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  MarkdownModule.forRoot(),
  MatSidenavModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
