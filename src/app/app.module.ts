import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // ✅ Needed for router-outlet

import { AppComponent } from './app.component';

// If you have routes defined elsewhere (like app-routing.module.ts), import it instead of defining here.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])  // ✅ Empty routes for now — you can add real ones later
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
