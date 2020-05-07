import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MapComponent } from './map/map.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AlertsComponent } from './alerts/alerts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { GoogleChartsModule } from 'angular-google-charts';
import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CloseComponent } from './close/close.component';
const appRoutes: Routes =[

  {path: 'about', component: AboutComponent},
  {path: '', component: CloseComponent}

];
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR GOOGLE KEY'
     
    }),
    AgmJsMarkerClustererModule,
    GoogleChartsModule.forRoot(),
    AngularDraggableModule,
    ResizableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ AppComponent, MapComponent, SideNavComponent, FooterComponent, AlertsComponent, AboutComponent, NavComponent, CloseComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
}