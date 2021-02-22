import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontChangeComponent } from './font-change/font-change.component';
import {FormsModule} from '@angular/forms';
import { HienthipetComponent } from './hienthipet/hienthipet.component';

@NgModule({
  declarations: [
    AppComponent,
    FontChangeComponent,
    HienthipetComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
