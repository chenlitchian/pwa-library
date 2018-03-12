import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";
import { AuthProvider } from '../../providers/auth/auth';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{

 user = {} as User;

 constructor(
 // private afAuth: AngularFireAuth, 
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public menuCtrl: MenuController, 
  public authProvider: AuthProvider,
  private loadingCtrl: LoadingController 
  )
 // private toastCtrl: ToastController,
  //private loadingCtrl: LoadingController)
  {


if(authProvider.authenticated){

  let loading = this.loadingCtrl.create({
    
  });

  loading.present();

  setTimeout(() => {
     this.navCtrl.setRoot('HomePage');
  }, 500);

  setTimeout(() => {
    loading.dismiss();
  }, 2000);

  
}else{
  this.menuCtrl.enable(false, 'menu-material');

  this.user = {
    email:"chenlitchian@gmail.com",
    password:'00000000'
  }
}
  
}

// ionViewDidLoad() {
//   console.log('ionViewDidLoad LoginPage');
// }

login(){
  this.authProvider.login(this.user.email, this.user.password);
}

// async register(user: User) {
//   try {
//     const result = await this.afAuth.auth.createUserWithEmailAndPassword(
//       user.email,
//       user.password
//       );
//     if (result) {
//       this.navCtrl.setRoot('HomePage');
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }
}