import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLService } from 'src/app/Services/url.service';
import { IUrlShortener } from '../ViewModels/iurl-shortener';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class URLsComponent implements OnInit {
  Urls:IUrlShortener[]=[];
  constructor(private URlService:URLService, private router:Router) {
  // this.Urls=this.URlService.getAllURLs();

   }

  ngOnInit(): void {
    this.URlService.getAllURLs().subscribe(UrlList=>{
      this.Urls=UrlList;
    })
    console.log (this.Urls);
  }
  OpenURl(Url:string){
    window.open(Url);
  }
}
