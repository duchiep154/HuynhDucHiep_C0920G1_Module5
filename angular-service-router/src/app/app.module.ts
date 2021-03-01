import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {HomeComponent} from './home/home.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DictionaryService} from './dictionary.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    HomeComponent,
    DictionaryDetailComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
