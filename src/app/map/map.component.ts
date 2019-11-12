import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MapServiceService } from './map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers:  [ MapServiceService ]
})
export class MapComponent implements OnInit {
  height : number;
  @Output() listToDisplay = new EventEmitter<any>();
  @HostListener('window:resize', ['$event'])
onResize(event?) {
   this.height = window.innerHeight-130;
}
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number ;
  lng: number ;
  markers$ : Observable<any>;
  content: string;
  markers = [];
  searchField: string;
  constructor(private service: MapServiceService) {
    this.onResize();
   }

  ngOnInit() {
    this.setCurrentLocation();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
   clickedMarker(index: number, job:string) {
    console.log(`clicked the marker: ${index}`)
    this.content = job;
    for (var i=0;i<this.markers.length;i++){
      this.markers[i].open = false;
    }
    this.markers[index].open = true;
  }
  loadJobs(jobInput:string,location:string) {
    this.service.getJobData(jobInput,location).subscribe(
      data => {
        this.markers$ = data;
        var s =data.Jobs;
        var myObject = eval('(' + s + ')');
        this.markers = myObject;
        this.listToDisplay.emit({'list':this.markers});
      },
      error => {
        this.markers = [];
        this.listToDisplay.emit({'list':[]});}
    );
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
