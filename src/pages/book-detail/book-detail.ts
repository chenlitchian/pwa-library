import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { BookImagePage } from '../pages/book-image/book-image'
/**
 * Generated class for the BookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {

  item: any;
  bookImg: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  


  this.item = navParams.get('data');
  console.log(this.item);

  if(this.item){

  //let img = "./assets/imgs/" + this.item.category + "/" + this.item.code + ".jpg";
  let img = "assets/imgs/samplebook.jpg"; //test with fake book img


  console.log(img);

  this.bookImg = img;


  }else{

    this.item = {
      // code: "1", 
      // title: "2", 
      // author: "3", 
      // category: "4", 
      // status: "5"
    }
    console.log("nothing here");
     //this.navCtrl.push(HomePage);

    this.navCtrl.setRoot('HomePage');
  }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }

  openImage(){

  	this.navCtrl.push('BookImagePage', {data:this.bookImg, title:this.item.title} );
  }

  addFavorite(){
    console.log('mock favorite');
  }

requestBook(){
  console.log('sending request')
}

}
