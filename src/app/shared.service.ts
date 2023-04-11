import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/api/";

  constructor(private http:HttpClient) { }

  getBooksList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'home/');
  }
  getBookDetail(val:any){
    return this.http.get(this.APIUrl + 'home/',val);
  }
  loginUser(val:any){
    return this.http.post(this.APIUrl,val);
  }

}
