import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
//import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  @ViewChild(Content) content: Content;
  allposts: any;
  posts: any;
  category: any;
  selectedValue: any;
  showSearch: boolean = false;
  myInput: any;
  emal: any;
  items: any;
  bookImg: any;
  userId: any;
  authState;
  currentUser;
  grid: boolean =false;
  constructor(
    //private db: AngularFireDatabase, 
   // private afAuth: AngularFireAuth,  
    public authProvider: AuthProvider, 
    public navCtrl: NavController, 
    public data: DataProvider, 
    public menuCtrl: MenuController, 
    public http: Http, 
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {




// let img = "./assets/imgs/" + this.post.category + "/" + this.post.code + ".jpg"
// this.bookImg = img;
// this.items = db.list('data').valueChanges();
// console.log(this.items);

if(!authProvider.authenticated){
  this.navCtrl.setRoot(LoginPage);
}else{


 this.menuCtrl.enable(true, 'menu-material');

 this.category = 'bf';

 window['isUpdateAvailable']
 .then(isAvailable => {
  if (isAvailable) {
    const toast = this.toastCtrl.create({
      message: 'New Update available! Reload the webapp to see the latest juicy changes.',
      position: 'bottom',
      showCloseButton: true,
    });
    toast.present();
  }
});

 this.http.get("db1.json")
 .map(res => res.json()) 
 .subscribe(data =>{
  console.log(data);
  this.posts = data.data.filter(post => post.category === 'BF');
  console.log(this.posts);
},error=>{
                 console.log(error);// Error getting the data
               });
}

}


openPage(book){

   let loading = this.loadingCtrl.create({
    
  });

  loading.present();

  setTimeout(() => {
     this.navCtrl.push('BookDetailPage', {data:book});
  }, 500);

  setTimeout(() => {
    loading.dismiss();
  }, 1000);
  
}


onSelectChange(selectedValue: any) {
  console.log('Selected', selectedValue);
  this.posts = this.data.getItem();
   let loading = this.loadingCtrl.create({
    
  });

  loading.present();
  switch(selectedValue) {

    case 'bf':  
      //this.posts = this.data.getItem();
      this.posts = this.posts.filter(post => post.category === 'BF');
      break;

      case 'cf':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'CF');
       break;

       case 'cx':
      // this.posts = this.data.getItem();
      this.posts = this.posts.filter(post => post.category === 'CX');
      break;

      case 'mh':
      //this.posts = this.data.getItem();
      this.posts = this.posts.filter(post => post.category === 'MH');

      break;
      case 'nf':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'NF');

       break;
       case 'nfe':
      // this.posts = this.data.getItem();
      this.posts = this.posts.filter(post => post.category === 'NFE');

      break;
      case 'qt':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'QT');

       break;
       case 'xj':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'XJ');

       break;
       case 'zf':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'ZF');

       break;
       case 'zz':
       //this.posts = this.data.getItem();
       this.posts = this.posts.filter(post => post.category === 'ZZ');
       break;

       default:
     }
     this.backtoTop();
      setTimeout(() => {
    loading.dismiss();
  }, 500);
   }


   // insertToCategory(){

   //   this.http.get("db1.json")
   //   .map(data => data.json().results) 
   //   .subscribe(data =>{
   //              //console.log(data);
   //              this.posts = data.data.filter(post => post.categopry === 'ZZ');
   //            },error=>{
   //               console.log(error);// Error getting the data
   //             });

   // }


  //  ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage'); 
  // }

  scrollToTop(){
    this.content.scrollToTop(5000);
    console.log("scrolling")
  }


goToSearch(){

   let loading = this.loadingCtrl.create({
  
  });

  loading.present();

  setTimeout(() => {
     this.navCtrl.push('SearchPage');
  }, 500);

  setTimeout(() => {
    loading.dismiss();
  }, 1000);
  
}


goToAuthor(){
  let loading = this.loadingCtrl.create({

  });

  loading.present();

  setTimeout(() => {
     this.navCtrl.push('AuthorPage');
  }, 500);

  setTimeout(() => {
    loading.dismiss();
  }, 1000);
  
  //this.navCtrl.push('FirestorePage');

}

backtoTop(){
  this.content.scrollToTop(500);
}

changeView(){
  this.grid = !this.grid;
}
 

 

}