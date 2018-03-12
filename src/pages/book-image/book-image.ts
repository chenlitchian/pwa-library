import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the BookImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-image',
  templateUrl: 'book-image.html',
})
export class BookImagePage {

img: any;
title:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.img = navParams.get('data');
  console.log(this.img);

   if(!this.img){
this.navCtrl.setRoot(HomePage);
    }


  this.title = navParams.get('title');
  console.log(this.img);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookImagePage');
  }

  return(){
    if(this.img){
      this.navCtrl.pop();
    }
    
  }

}
