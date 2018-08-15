import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { StaffinfoComponent } from './staffinfo/staffinfo.component';
import { TestingComponent } from './testing/testing.component';
import { EventsComponent } from './events/events.component';
import { FasfaComponent } from './fasfa/fasfa.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { CollegeComponent } from './college/college.component'
import { SignComponent } from './sign/sign.component'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StaffinfoComponent,
    TestingComponent,
    EventsComponent,
    FasfaComponent,
    ScholarshipsComponent,
    CollegeComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
