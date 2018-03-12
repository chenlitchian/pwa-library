import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Generated class for the FirestorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



interface Post {
  title: string;
  content: string;
}
// interface PostId extends Post {
//   id: string;
// }

interface Notice {
  title: string;
  content: string;
}
// interface NoticeId extends Notice {
//   id: string;
// }

interface Book {
  title: string;
  author: string;
   category: string;
    description: string;
     status: string;
      code: string;
}



@IonicPage()
@Component({
  selector: 'page-firestore',
  templateUrl: 'firestore.html',
})
export class FirestorePage {

postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  bookCol: AngularFirestoreCollection<Book>;
  books:any;

  noticeCol: AngularFirestoreCollection<Notice>;
  notices:any;

  title:string;
  content:string;

  noticetitle:string;
  noticecontent:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

noticeDoc: AngularFirestoreDocument<Notice>;
  notice: Observable<Notice>;

   bookDoc: AngularFirestoreDocument<Book>;
  book: Observable<Book>;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private afs: AngularFirestore
  	) {
  }

  ionViewDidLoad() {

//     this.afs.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
   
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      });

       this.noticeCol = this.afs.collection('notifications');
    //this.posts = this.postsCol.valueChanges();
    this.notices = this.noticeCol.snapshotChanges()
      .map(actions => {
        return actions.map(b => {
          const data = b.payload.doc.data() as Notice;
          const id = b.payload.doc.id;
          return { id, data };
        })
      });


 this.bookCol = this.afs.collection('data');
    //this.posts = this.postsCol.valueChanges();
    this.books = this.bookCol.snapshotChanges()
      .map(actions => {
        return actions.map(c => {
          const data = c.payload.doc.data() as Book;
          const id = c.payload.doc.id;
          return { id, data };
        })
      });




  }
addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }


addNotice() {
    this.afs.collection('notifications').add({'title': this.noticetitle, 'content': this.noticecontent});
  }

  getNotice(noticeId) {
    this.noticeDoc = this.afs.doc('notifications/'+noticeId);
    this.notice = this.noticeDoc.valueChanges();
  }

  deleteNotice(noticeId) {
    this.afs.doc('notifications/'+noticeId).delete();
  }

  getBook(bookId) {
    this.bookDoc = this.afs.doc('data/'+bookId);
    this.book = this.bookDoc.valueChanges();
  }

}