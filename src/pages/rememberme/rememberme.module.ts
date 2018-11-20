import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemembermePage } from './rememberme';

@NgModule({
  declarations: [
    RemembermePage,
  ],
  imports: [
    IonicPageModule.forChild(RemembermePage),
  ],
})
export class RemembermePageModule {}
