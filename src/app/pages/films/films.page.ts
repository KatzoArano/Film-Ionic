import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FilmService} from '../../services/film.service';
import {IFilms} from '../../model/IFilm.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  results: Observable<IFilms>;
  term: string = "";
  type: string = "";
  
  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  searchChanged(): void{
    this.results = this.filmService.searchFilms(this.term, this.type);
  }

}
