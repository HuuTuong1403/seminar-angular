import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { Album, Photo } from 'src/app/components/DependencyInjection/type';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient, private loggerService: LoggerService) {}

  getAlbums(): Observable<Album[]> {
    this.loggerService.log('Getting albums...');
    return this.http.get<Album[]>(`${this.url}/albums`);
  }

  getPhotos(): Observable<Photo[]> {
    this.loggerService.log('Getting photos...');
    return this.http.get<Photo[]>(`${this.url}/photos`);
  }
}
