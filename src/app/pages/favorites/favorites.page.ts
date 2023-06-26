import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';
import { Source } from '../sources/SourcesData';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  sources: any;
  id: any;

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initStorage();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFavorites();
  }

  async initStorage() {
    await this.storage.create();
  }

  getFavorites() {
    this.storage.get('favorites').then((res) => {
      this.sources = JSON.parse(res);
    });
  }

  onRefresh() {
    this.getFavorites();
  }

  unFavorite(source: Source) {
    const index = this.sources.indexOf(source);
    this.sources.splice(index, 1);
    this.storage.set('favorites', JSON.stringify(this.sources));
  }
}
