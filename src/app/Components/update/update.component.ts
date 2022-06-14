import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLService } from 'src/app/Services/url.service';
import { IUrlShortener } from '../ViewModels/iurl-shortener';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  OldUrl:IUrlShortener= {} as IUrlShortener;
  currUrlID:number=0;
  constructor(private URlService:URLService, private router:Router,private activatedRoute:ActivatedRoute
    ) {
    
  
     }

  ngOnInit(): void {
    this.currUrlID=Number(this.activatedRoute.snapshot.paramMap.get("Uid"));
    this.URlService.getURLByID(this.currUrlID).subscribe(url=>{
      this.OldUrl=url;
    });
  }
  saveURL()
  {
    this.URlService.UpdateURL(this.currUrlID,this.OldUrl).subscribe(url=>{
        this.router.navigate(['/URls']);
    
    });
  }

}
