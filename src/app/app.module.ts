import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule,Routes } from '@angular/router';



const appRoute: Routes = [
  {
   path:'',component:HomeComponent
  },
  
  {
  path: 'Home',
  component: HomeComponent
},
{
  path: 'About',
  component: AboutComponent

},
{
  path: 'Contact',
  component: ContactComponent
},
{
  path: 'Service',
  component: ServiceComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
