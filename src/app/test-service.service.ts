import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
       'Accept':'application/json'
    }),
  };
  
  constructor(private http: HttpClient) { }
  // let SERVER = "";
  SERVERs = [
    "de1.api.radio-browser.info",
    "nl1.api.radio-browser.info",
    "at1.api.radio-browser.info",
  ];
  PROTOCOL = "https";
  


  fetchRadio(){
    let url=`${this.PROTOCOL}://${this.SERVERs[0]}/json/stations/bycountrycodeexact/IN`;
    return this.http.get(url, this.httpOptions);
  }
}