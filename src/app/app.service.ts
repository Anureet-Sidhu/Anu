import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string;

  constructor(private http:HttpClient) { 
  }
  getJobData(): Observable<any>{
      this.url ='';
      return this.http.get(this.url).pipe(map(data=>{
        return data;
      }
      ))

  }

  BASE_URL = "https://unidosmexico85.firebaseio.com";
  LOCATIONS_URL = "/locations.json";
  fetchData = true;
  getLocation(): Observable<any> {
    return this.http.get(this.LOCATIONS_URL);
  }

}
