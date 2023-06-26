import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
  news: any;
  id: any;

  constructor(
    private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  goBack() {
    this.router.navigate(['/tabs/sources']);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.news = this.newsService.getData(`everything?sources=${this.id}`);
  }
}
