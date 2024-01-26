import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getCarData(): Observable<any> {
    return this.http.get('http://localhost:8080/api/brands');
  }
  getBrandData():Observable<any>{
    return this.http.get('http://localhost:8080/api/brands')
  }

}
