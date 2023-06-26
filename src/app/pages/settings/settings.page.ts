import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Cleared Favorites',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  onClearFavorites() {
    this.storage.remove('favorites');
    this.presentToast('top');
  }
}
