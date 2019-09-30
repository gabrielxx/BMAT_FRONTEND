import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ProgramsService } from './providers/programs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProgramsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
