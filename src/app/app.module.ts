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
import { SideNavService } from './side-nav/side-nav.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AlertsComponent } from './alerts/alerts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { GoogleChartsModule } from 'angular-google-charts';
import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

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
    ResizableModule
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent, SideNavComponent, FooterComponent, AlertsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
}