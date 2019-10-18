import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:  [ AppService ]
})
export class AppComponent  {
  constructor(private service: AppService) { }

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers$ : Observable<any>;
  content: string;

  
  ngOnInit() {
    this.markers$ = this.getLocations();
   }
   
   getLocations(): Observable<any> {
      return this.service.getLocation();
   } 
}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  jobs?: string;
  open: boolean;
}
