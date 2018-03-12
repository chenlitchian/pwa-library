import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookImagePage } from './book-image';

@NgModule({
  declarations: [
    BookImagePage,
  ],
  imports: [
    IonicPageModule.forChild(BookImagePage),
  ],
})
export class BookImagePageModule {}
