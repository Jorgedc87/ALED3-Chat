import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>
  public chats: any[]

  constructor(
    private afs: AngularFirestore
  ) { }

  traeMensajes(){
    this.itemsCollection = this.afs.collection<any>('chats');
    return this.itemsCollection.valueChanges()
  }
}
