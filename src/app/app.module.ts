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

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR GOOGLE KEY'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent, SideNavComponent, FooterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
}