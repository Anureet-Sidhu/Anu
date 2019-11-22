import { Component, OnInit } from '@angular/core';
import { SideNavService } from './side-nav.service';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers:  [ SideNavService ]
})
export class SideNavComponent implements OnInit {
 list = [];
 chart = [];
 title="Crime Data";
 graph="LineChart";
 columnNames = ['City','Rate'];
 options = {
   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
};
width = 2000;
height1 = 489;
  constructor(private service: SideNavService) { }

  ngOnInit() {

    
    
  }
  style: {};
onResizeEnd(event: ResizeEvent): void {
  this.style = {
    width: `${event.rectangle.width}px`,
    height: `${event.rectangle.height}px`
  };
 
}
  onDisplayListChanged(data){
    this.list = data;
    if(!this.chart || this.chart.length===0){
      var results = [];
      var obj;
      var count = 0;
      let arr = [];
  this.service.getCrimeData().subscribe(
    data => {
      var s =data.crimeData;
      //var myObject = eval('(' + s + ')');
      
      s.forEach((item, index) => {
        count++;
        if(count===2){
          arr.push(item);
        }
        if(count===3){
          item = item.replace(/\./g,'');
          arr.push(Number(item));
          obj={'city':arr[0] , 'rate':arr[1]};
          results.push(arr);
          count=0;
          arr=[];
          obj ={};
        }
      });
      this.chart=results;
      console.log(this.chart);
    },
  );
  }
  }

}
