import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { HttpModule } from '@angular/http';

import { DataProvider } from '../providers/data/data';
 import {HttpClientModule} from '@angular/common/http' 

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environment/environment';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyApp,
    LoginPage

  ],
  imports: [
    BrowserModule,
      HttpModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //  HomePage,
    LoginPage
  ],
  providers: [
  AuthProvider,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase
   
    
    
  ]
})
export class AppModule {


}
