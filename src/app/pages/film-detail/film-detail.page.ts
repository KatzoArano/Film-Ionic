import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  content: object = null;
  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getDetailsFilm(id).subscribe(result => this.content = result);
  }

}
