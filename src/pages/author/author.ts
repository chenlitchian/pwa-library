import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AuthorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-author',
  templateUrl: 'author.html',
})
export class AuthorPage {


	 posts: any;
	 authors: any;
	 posts_no_dup: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public data: DataProvider, 
    public http: Http,
    public authProvider: AuthProvider) {


if(!authProvider.authenticated){
      this.navCtrl.setRoot(LoginPage);
    }

  	this.http.get("db1.json")
    .map(res => res.json()) 
    .subscribe(data =>{
      console.log(data);
      this.posts = data.data;
      console.log(this.posts);
     
     let items = this.posts;
     let author1 = [];
    for(var i=0; i < items.length; i++) {
    	author1.push(items[i].author);
       // console.log(items[i]);
    }
    console.log(author1);
    this.authors = this.uniq(author1);
    console.log(this.authors); 

    },error=>{
                 console.log(error);// Error getting the data
               });

    console.log(this.posts);



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorPage');
  }


goToSearch(){
  this.navCtrl.push('SearchPage');
}

uniq(a) {
   return Array.from(new Set(a));
}

searchByAuthor(bookauthor){

this.navCtrl.push('BookByAuthorPage', {data:bookauthor});


}

}
