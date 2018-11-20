import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockinPage } from './stockin';

@NgModule({
  declarations: [
    StockinPage,
  ],
  imports: [
    IonicPageModule.forChild(StockinPage),
  ],
})
export class StockinPageModule {}
