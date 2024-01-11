import { UrlFormComponent } from './components/url-form/url-form.component';
import { UrlShortenFormComponent } from './components/index';
import { Routes } from '@angular/router';
import { ShortUrlListComponent } from './components/index';


export const routes: Routes = [
    {
        path:'',
        component:UrlFormComponent
    },
    {
        path:'list',
        component:ShortUrlListComponent
    }
];
