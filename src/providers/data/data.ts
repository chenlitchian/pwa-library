//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

	items: any;
  bookByAuthor: any;

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');

    this.http.get("db1.json")
    .map(res => res.json()) 
    .subscribe(data =>{
      console.log(data);
      this.items = data.data;
      console.log(this.items);
    },error=>{
                 console.log(error);// Error getting the data
               });
  }

  filterItems(searchTerm){

  	return this.items.filter((item) => {
  		return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  	}, error=>{
         // this.navCtrl.setRoot('HomePage');
                 console.log(error);// Error getting the data
               });
  }

  getItem(){
    return this.items;
  }

  getBookByAuthor(author){

let books = this.items;
let authorbook = [];
     for(var i=0; i < books.length; i++) {

if(author == books[i].author){

authorbook.push(books[i]);
}

this.bookByAuthor = authorbook;

       }

       return this.bookByAuthor;
       //console.log(this.bookByAuthor);
    }

  




}
