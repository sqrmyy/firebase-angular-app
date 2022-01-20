import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <ul>
    <li *ngFor="let item of item$ | async">
      {{ item.name }}
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-angular-app';
  item$: Observable<DocumentData[]>;
  constructor(firestore: Firestore) {
    const c = collection(firestore, 'items');
    this.item$ = collectionData(c);
  }
}
