import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Source } from './SourcesData';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
// import { SourcesData } from './SourcesData';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
  sources: any;

  fakeSources = new Array(20);
  term = '';
  constructor(
    private newsService: NewsService,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.initStorage();
  }

  async initStorage() {
    console.log('Initializing storage...');
    await this.storage.create();
    console.log('Storage initialized.');
  }

  ngOnInit() {
    // this.sources = this.newsService.getData(
    //   'sources'
    // ) as Observable<SourcesData>;
    this.newsService.getData('sources').subscribe((response: any) => {
      this.sources = response.sources;
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Article added to favorites',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  favorite(source: Source) {
    this.initStorage().then(() => {
      this.storage.get('favorites').then((res) => {
        let favorites = [];
        if (res !== null) {
          favorites = JSON.parse(res);
        }

        favorites.push(source);

        this.storage.set('favorites', JSON.stringify(favorites)).then(() => {
          this.presentToast('top');
        });
      });
    });
  }
}
