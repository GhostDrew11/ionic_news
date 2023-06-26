import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcePageRoutingModule } from './source-routing.module';

import { SourcePage } from './source.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule,
    SourcePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SourcePage],
})
export class SourcePageModule {}
