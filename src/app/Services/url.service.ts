import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUrlShortener } from '../Components/ViewModels/iurl-shortener';

@Injectable({
  providedIn: 'root'
})

export class URLService {
 private httpOptions;
  constructor(private Router:Router, private HttpClient:HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })

  }
 }
 getAllURLs():Observable<IUrlShortener[]>
  {
    return this.HttpClient.get<IUrlShortener[]>(`${environment.APIBaseURL}/Short_Url`);
   }
 
  getURLByID(ID:number):Observable<IUrlShortener>{
      return this.HttpClient.get<IUrlShortener>(`${environment.APIBaseURL}/Short_Url/${ID}`)
   }
  addURL(NewURL:IUrlShortener):Observable<IUrlShortener>
  {
    return this.HttpClient.post<IUrlShortener>(`${environment.APIBaseURL}/Short_Url`, JSON.stringify(NewURL),this.httpOptions);
  }
  UpdateURL(id:number, upURL:IUrlShortener):Observable<IUrlShortener>
  {
    return this.HttpClient.put<IUrlShortener>(`${environment.APIBaseURL}/Short_Url/${id}`, JSON.stringify(upURL),this.httpOptions);
  }
}