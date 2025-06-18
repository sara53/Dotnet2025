import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Promotion {
  ads: string[] = [
    'Buy One Get One',
    'Buy Two get 3',
    // '',
    'discount up to 50%',
    'discount up to 20%',
  ];
  constructor() {}

  getCurrentAds(): Observable<string> {
    //
    let myObservable = new Observable<string>((observer) => {
      let count = 0;
      let myInterval = setInterval(() => {
        observer.next(this.ads[count++]);
        if (this.ads[count] == '') {
          observer.error('Empty Add');
        }
        if (this.ads.length == count) {
          observer.complete();
        }
      }, 1000);
      // end of observable
      return {
        // call automatic -- complete
        // call -- error
        unsubscribe() {
          // call
          console.log('unsubscribe');
          clearInterval(myInterval);
        },
      };
    });

    return myObservable;
  }
}
