import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { StaffinfoComponent } from "./staffinfo/staffinfo.component";
import { TestingComponent } from "./testing/testing.component";
import { EventsComponent } from "./events/events.component";
import { FasfaComponent } from "./fasfa/fasfa.component";
import { ScholarshipsComponent } from "./scholarships/scholarships.component";
import { CollegeComponent } from "./college/college.component";
import { SignComponent } from './ sign/sign.component';
const routes: Routes = [
  {
    path: "", component: HomePageComponent,
  },
  {
    path:"testing", component: TestingComponent,
  },
  {
    path:"events", component: EventsComponent,
  },
  {
    path:"fasfa", component: FasfaComponent,
  },
  {
    path:"scholarships", component: ScholarshipsComponent,
  },
  {
    path:"college", component: CollegeComponent,
  },
  {
    path:"sign", component: SignComponent,
  },
  {
    path: "staffinfo", component: StaffinfoComponent,
  },
  {
    path: "", redirectTo: "/", pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }