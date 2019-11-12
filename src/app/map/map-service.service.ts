import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  url: string;
  constructor(private http:HttpClient) { }

  getJobData(jobSearchString,locationString): Observable<any>{
    this.url ='/flaskJobs/'+jobSearchString+'/'+locationString;
    return this.http.get(this.url).pipe(map(data=>{
      return data;
    }
    ))

}

  BASE_URL = "/flaskJobs";
  fetchData = true;
  getLocation(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
}
