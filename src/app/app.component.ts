import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private pages: Array<{title: string, component: any}>;
  email: string;
  password: string;
user;



  public rootPage: any = LoginPage;

  

  constructor(
    public platform: Platform, 
    public afAuth: AngularFireAuth, 
    public authProvider: AuthProvider, 
    public menuCtrl:MenuController,
   ){


// this.user = afAuth.authState;
// console.log(this.user);
// if(this.user){
//   this.rootPage = 'HomePage';
// }

  this.afAuth.authState.subscribe(auth => {

    if(auth){ this.nav.setRoot('HomePage');

  }else{

    this.nav.setRoot(this.rootPage);
    console.log(auth);


  }
  });




    this.pages = [

    { title: 'Home', component: 'HomePage' },
    { title: 'Books', component: 'BookDetailPage' },
    { title: 'Category', component: 'HomePage' },
    { title: 'Author', component: 'AuthorPage'},
    { title: 'Search', component: 'SearchPage'},
    { title: 'About Us', component: 'HomePage'},
    { title: 'Account', component: 'HomePage'},
    { title: 'Setting', component: LoginPage},
    { title: 'Logout', component: 'LogoutPage'}
    ];
  
  }
  
  openPage(page : any) : void
  {

    this.nav.setRoot(page.component);
    this.menuCtrl.toggle();
  }

  signup() {
    this.authProvider.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authProvider.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    //this.authProvider.logout();
    this.afAuth.auth.signOut();
    console.log('logout');
  }



}

