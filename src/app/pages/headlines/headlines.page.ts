import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { NewsData } from '../top-news/NewsData';
import { NewsService } from 'src/app/services/news.service';

register();

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  news: Observable<NewsData> = new Observable<NewsData>();

  categories = [
    'World',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science',
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category: String) {
    console.log(category.toLowerCase());
    this.getCategoryData(category);
  }

  getCategoryData(category: String) {
    this.news = this.newsService.getData(
      `everything?q=${category.toLowerCase()}`
    ) as Observable<NewsData>;
  }
}
