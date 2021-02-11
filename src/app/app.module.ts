import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';


const appRoutes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'reserve',
    component:ScheduleComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    HomeComponent,
    FooterComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
