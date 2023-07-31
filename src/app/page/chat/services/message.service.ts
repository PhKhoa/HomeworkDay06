import { Injectable } from '@angular/core';
import { Firestore,onSnapshot,limitToLast,query,orderBy,setDoc,doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/models/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore:Firestore) { }

  messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  listenMessages(conversationId: string) {
    let messageCollection = collection(
      this.firestore,
      'messages-' + conversationId
    );
    let q = query(messageCollection, orderBy('timestamp'), limitToLast(50));
    onSnapshot(q, (snapshot) => {
      let messages = new Array<Message>();
      for (let doc of snapshot.docs) {
        let message = doc.data() as Message;
        messages.push(message);
      }
      this.messages.next(messages);
    });
  }

  async send(conversationId: string, message: Message) {
    let messageCollection = collection(
      this.firestore,
      'messages-' + conversationId
    );
    let currentTime = Date.now();
    message.timestamp = currentTime;
    try {
      // set doc with timestamp
      await setDoc(doc(messageCollection, currentTime.toString()), message);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
