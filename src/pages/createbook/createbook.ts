import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { LoginPage } from '../login/login';
import { Book } from "../../models/book";
/**
 * Generated class for the CreatebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createbook',
  templateUrl: 'createbook.html',
})
export class CreatebookPage {

	itemsRef: any;
  book = {} as Book;
  items: any;

  constructor(
    private db: AngularFireDatabase, 
   // private afAuth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams) {



this.items = db.list('books').valueChanges();



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatebookPage');
  }

  addBook(){
  	 this.itemsRef = this.db.list('books');
this.itemsRef.push({ title: this.book.title, author: this.book.author });

this.book.title = "";
this.book.author = "";
  }

}
