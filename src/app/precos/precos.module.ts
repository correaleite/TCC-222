import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrecosPageRoutingModule } from './precos-routing.module';

import { PrecosPage } from './precos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    PrecosPageRoutingModule
  ],
  declarations: [PrecosPage]
})
export class PrecosPageModule {}
