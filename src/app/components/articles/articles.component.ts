import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsData } from 'src/app/pages/top-news/NewsData';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input()
  news: Observable<NewsData> = new Observable<NewsData>();
  fakeArticles = new Array(20);

  constructor() {}

  ngOnInit() {}
}
