import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Album, Photo } from './type';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-dependencyInjectionPage',
  templateUrl: './dependencyInjectionPage.component.html',
  styleUrls: ['./dependencyInjectionPage.component.scss'],
})
export class DependencyInjectionPage implements OnInit {
  albumList: Album[] = [];
  
  constructor(
    private albumService: AlbumService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.getAlbumList();
  }

  getAlbumList() {
    this.albumService.getAlbums().subscribe(
      (res) => {
        this.albumList = res;
      },
      (err) => {
        this.loggerService.log(err);
      }
    );
  }
}
