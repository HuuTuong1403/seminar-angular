import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Photo } from '../type';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[] = [];
  id: string = '';

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private loggerService: LoggerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getPhotoList();
  }

  getPhotoList() {
    this.albumService.getPhotos().subscribe(
      (res) => {
        this.photoList = res?.filter(
          (item) => item.albumId === Number(this.id)
        );
      },
      (err) => {
        this.loggerService.log(err);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
