import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UrlShortenService } from '../../service/urlshorten.service';

@Component({
  selector: 'app-shorten-url-strapi',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './shorten-url-form.component.html',

})
export class UrlShortenFormComponent {
  public url = new FormControl('', Validators.required);
  public alias = new FormControl('', Validators.required);
  public shortenUrl: any;
  public isSubmit:boolean=false
  constructor(private urlService: UrlShortenService , private router:Router) {}


  public shorten() {
    this.isSubmit = true
    const body: any = {
      data:{
        url: this.url.value,
        alias:this.alias.value
      }
    };
    if (this.url.valid) {
    
      this.urlService.shortenUrlWithStrapi(body).subscribe({
        next: (res) => {
          console.log(res);
          this.shortenUrl = res.id;
          this.router.navigateByUrl('/list')
        },
      });
    } else {
      this.url.markAllAsTouched();
    }
  }

  public copyLink(link: string): void {
    const inputElement = document.createElement('input');
    inputElement.value = link;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
  }

 public hasError(errorName: string) {
    return this.url.hasError(errorName);
  }

}
