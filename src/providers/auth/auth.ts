import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AuthProvider {

	user: Observable<firebase.User>;
authState: any = null;

  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          
  }


   signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }


  	login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }


  logout() {
    this.afAuth
      .auth
      .signOut();
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }


get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }


get currentUserObservable(): any {
    return this.afAuth.authState
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }




}
