import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookByAuthorPage } from './book-by-author';

@NgModule({
  declarations: [
    BookByAuthorPage,
  ],
  imports: [
    IonicPageModule.forChild(BookByAuthorPage),
  ],
})
export class BookByAuthorPageModule {}
