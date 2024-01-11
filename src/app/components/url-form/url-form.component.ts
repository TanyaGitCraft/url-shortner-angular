import { HttpClientModule } from '@angular/common/http';
import { UrlShortenService } from './../../service/urlshorten.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './url-form.component.html',

})
export class UrlFormComponent {
  public url = new FormControl('', Validators.required);
  public shortenUrl: any = '';
  public isSubmit:boolean=false
  constructor(private urlService: UrlShortenService) {
  
  }

  public shorten() {
    this.isSubmit = true
    const body: any = {
      url: this.url.value,
    };
    if (this.url.valid) {
    
      this.urlService.shortenUrl(body).subscribe({
        next: (res) => {
          console.log(res);
          this.shortenUrl = res.id;
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

  public reset(){
    this.url.reset();
    this.shortenUrl = ''
    this.isSubmit = false
  }
 
  getOptionInfo(value: string, name: string): void {
    // Create an object with name and value
    const selectedInfo = { name, value };

    // Do something with the selected information, for example, log it
    console.log(selectedInfo);
  }
}
