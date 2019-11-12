import { Component, ViewChild, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
const cities=['Barrie','Belleville','Brampton','Brant','Brantford','Brockville','Burlington','Cambridg','Clarence-Rockland','Cornwall','Dryden','Elliot Lake','Greater Sudbury','Guelph','Haldimand County','Hamilton','Kawartha Lakes','Kenora','Kingston','Kitchener','London','Markham','Mississauga','Niagara Falls','Norfolk County','North Bay','Orillia','Oshawa','Ottawa','Owen Sound','Pembroke','Peterborough','Pickering','Port Colborne','Prince Edward County','Quinte West','Richmond Hill','Sarnia','Sault Ste. Marie','St. Catharines','St.Thomas','Stratford','Temiskaming Shores','Thorold','Thunder Bay','Timmins','Toronto','Vaughan','Waterloo','Welland','Windsor','Woodstock']; 
const states=['Alberta','British Columbia','Manitoba','New Brunsick','Newfoundland and labrador','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon'];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit  {
  constructor() { }
  showAlert = false;
  showLoader = false;
  showSideNav = false;
  @ViewChild(MapComponent,{static: false}) map: MapComponent;
  @ViewChild(SideNavComponent,{static: false}) sideNav: SideNavComponent;
  valueChanged(val) { 
    this.showLoader = true;
    this.showAlert = false;
   this.map.loadJobs(val,this.model);
}
displayList(event){
  this.showLoader = false;
  this.showAlert = false;
  if(!event.list || event.list.length===0){
    this.showAlert = true;
    this.showSideNav = false;
  }else{
    this.showSideNav = true;
  }
    this.sideNav.onDisplayListChanged(event.list);

}
model: any='Ontario';

@ViewChild('instance', {static: true}) instance: NgbTypeahead;
focus$ = new Subject<string>();
click$ = new Subject<string>();

search = (text$: Observable<string>) => {
  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
  const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
  const inputFocus$ = this.focus$;

  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
    map(term => (term === '' ? states
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
  );
}

  
  ngOnInit() {
   
   }
  
}





