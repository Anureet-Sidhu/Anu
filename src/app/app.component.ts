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
  showAlert = false;
  @ViewChild(MapComponent,{static: false}) map: MapComponent;
  @ViewChild(SideNavComponent,{static: false}) sideNav: SideNavComponent;
  valueChanged(val) { 
   this.map.loadJobs(val);
}
displayList(event){
  if(!event.list || event.list.length===0){
    this.showAlert = true;
  }else{
    this.sideNav.onDisplayListChanged(event.list);
  }

}
 

  
  ngOnInit() {
   
   }
  
}





