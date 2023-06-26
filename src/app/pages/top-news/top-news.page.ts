import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsData } from './NewsData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {
  news: Observable<NewsData> = new Observable<NewsData>();

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getData();
    // console.log(this.news);
    // this.newsService
    //   .getData('top-headlines?country=us&category=business')
    //   .subscribe((data) => {
    //     this.news = data;
    //     console.log(data);
    //   });
  }

  getData() {
    this.news = this.newsService.getData(
      'top-headlines?country=us&category=business'
    ) as Observable<NewsData>;
  }

  doRefresh(event: Event) {
    this.getData();
    console.log(event);

    setTimeout(() => {
      const target = event?.target as HTMLIonRefresherElement;
      target?.complete();
    }, 2000);
  }
}
