import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { URL, STRAPISHORTENBODY } from '../interface/url.interface';
import { API_URL } from '../const/api-url.const';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenService {
  constructor(private http: HttpClient) {}

  shortenUrl(body: URL): Observable<any> {
    return this.http.post<URL>(`${API_URL.SHORTEN_URL}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  shortenUrlWithStrapi(body: STRAPISHORTENBODY): Observable<any> {
    return this.http.post<URL>(`${API_URL.STRAPIPOST_URL}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getAllUrls(): Observable<any> {
    return this.http.get<URL>(`${API_URL.STRAPIPOST_URL}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
