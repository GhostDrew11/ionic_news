import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcesPageRoutingModule } from './sources-routing.module';

import { SourcesPage } from './sources.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SourcesPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [SourcesPage],
  providers: [Storage],
})
export class SourcesPageModule {}
