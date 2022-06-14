import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLService } from 'src/app/Services/url.service';
import { IUrlShortener } from '../ViewModels/iurl-shortener';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  newUrl:IUrlShortener= {}as IUrlShortener;
  constructor(private URlService:URLService, private router:Router) {
    // this.Urls=this.URlService.getAllURLs();
  }
  

  ngOnInit(): void {
  }
  NewUrl(url:string){
   this.newUrl.originalUrl= url;
   this.URlService.addURL(this.newUrl).subscribe(prd=>{
    this.router.navigate(['/Urls']);
  });
   console.log(url);
   console.log(this.newUrl);
  }



}
