import { Component } from '@angular/core';
import { UrlShortenService } from '../../service/urlshorten.service';

@Component({
  selector: 'app-short-url-list',
  standalone: true,
  imports: [],
  templateUrl: './short-url-list.component.html',
  styleUrl: './short-url-list.component.scss'
})
export class ShortUrlListComponent {
  public allShortUrls:any[]=[]
  constructor(private urlService: UrlShortenService) {}

  ngOnInit(){
  this.getAllLinks()
  }


  public getAllLinks(){
    this.urlService.getAllUrls().subscribe({
      next:(res)=>{
        this.allShortUrls = res.data.attributes.results
        console.log(this.allShortUrls , "TESTTEST")
      }
    })
  }



}
