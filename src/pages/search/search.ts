import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [DataProvider]
})
export class SearchPage {

searchTerm: any;
items: any;
searchControl: FormControl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataService: DataProvider,
     public authProvider: AuthProvider) {
  

  if(!authProvider.authenticated){
  this.navCtrl.setRoot(LoginPage);
}else{
this.searchControl = new FormControl();
}

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SearchPage');
    if(this.authProvider.authenticated){
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
            this.setFilteredItems();
 
        },error=>{
          this.navCtrl.setRoot('HomePage');
                 console.log(error);// Error getting the data
               });
  }
  }

setFilteredItems(){
  this.items = this.dataService.filterItems(this.searchTerm);
}
  
 openPage(item){
   this.navCtrl.push('BookDetailPage', { data: item });
 }


}
