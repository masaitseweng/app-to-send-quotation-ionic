import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutofillPage } from './autofill';

@NgModule({
  declarations: [
    AutofillPage,
  ],
  imports: [
    IonicPageModule.forChild(AutofillPage),
  ],
})
export class AutofillPageModule {}
