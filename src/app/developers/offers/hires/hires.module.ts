import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiresPageRoutingModule } from './hires-routing.module';

import { HiresPage } from './hires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiresPageRoutingModule
  ],
  declarations: [HiresPage]
})
export class HiresPageModule {}
