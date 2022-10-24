import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>
  public chats: Mensaje[]

  constructor(
    private afs: AngularFirestore
  ) { }

  traeMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('timestamp', 'asc'));
    return this.itemsCollection.valueChanges()
  }

  enviaMensaje(mensaje){
    return this.itemsCollection.add(mensaje)
  }
}
