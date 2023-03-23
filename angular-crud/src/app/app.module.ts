import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './Toolbar/Toolbar.module';
import { AddPersonModule } from './AddPerson/AddPerson.module';
import { BodyModule } from './body/body.module';


@NgModule({
  declarations: [
    AppComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    AddPersonModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
