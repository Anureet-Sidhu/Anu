import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  content: string;

  clickedMarker(label: string, index: number, job:string) {
    console.log(`clicked the marker: ${label || index}`)
    this.content = job;
    for (var i=0;i<this.markers.length;i++){
      this.markers[i].open = false;
    }
    this.markers[index].open = true;
  }
  
 
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'M',
      draggable: true,
      jobs:'Software Engineer, Manager, Trader',
      open: false
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
      draggable: false,
      jobs:'Data mining, Java Developer',
      open: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
      draggable: true,
      jobs:'Bookstore keeper, Data Analyst',
      open: false
    },
    {
		  lat: 51.723858,
		  lng: 7.96890,
		  label: 'D',
      draggable: true,
      jobs:'Broker, Professor',
      open: false
	  }
  ]
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
