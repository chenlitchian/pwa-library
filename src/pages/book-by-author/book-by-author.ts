import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the BookByAuthorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-by-author',
  templateUrl: 'book-by-author.html',
})
export class BookByAuthorPage {

	author: any;
	books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {

  	this.author = navParams.get('data');

if(this.author){
	this.books = this.data.getBookByAuthor(this.author);
	console.log(this.data.getBookByAuthor(this.author));
}
console.log(this.author);
console.log(this.data.getBookByAuthor(this.author));


  	

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookByAuthorPage');
  }

openPage(book){
    this.navCtrl.push('BookDetailPage', {data:book});
  }



}
