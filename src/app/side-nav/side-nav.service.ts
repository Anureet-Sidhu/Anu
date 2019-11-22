import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  url: string;
  constructor(private http:HttpClient) { }

  getCrimeData(): Observable<any>{
    this.url ='/crimeData';
    return this.http.get(this.url).pipe(map(data=>{
      return data;
    }
    ))

}
}
