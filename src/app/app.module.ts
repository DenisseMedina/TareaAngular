import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstructuraPersonaComponent } from './estructura-persona/estructura-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    EstructuraPersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
