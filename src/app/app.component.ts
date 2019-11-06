import { Component, ViewChild, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit  {
  constructor() { }
  @ViewChild(MapComponent,{static: false}) map: MapComponent;
  @ViewChild(SideNavComponent,{static: false}) sideNav: SideNavComponent;
  valueChanged(val) { 
   this.map.loadJobs(val);
}
displayList(event){
this.sideNav.onDisplayListChanged(event.list);
}
 

  
  ngOnInit() {
   
   }
  
}





