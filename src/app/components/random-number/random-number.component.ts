import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-random-number',
  styleUrls: ['./random-number.component.scss'],
  templateUrl: './random-number.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomNumberComponent {
  numbers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6]);
  // _refreshNumberSubject: BehaviorSubject<number> =
  //   new BehaviorSubject<number>(0);

  _generateNumberSubject: BehaviorSubject<void> =
    new BehaviorSubject<void>(void 0);

  data$: Observable<number> = this._generateNumberSubject.asObservable().pipe(switchMap(() => this.getRandomNumber()))
  //number$ :Observable<number> = this._refreshNumberSubject.asObservable();

  constructor() {
    // this.generateNumber()
  }

  getRandomNumber() {
    return this.numbers$.pipe(map(x => x[generateRandom(x.length)]));
  }

  generateNumber() {
    // this.numbers$.pipe(map
    //   (
    //     x => {
    //       this._refreshNumberSubject.next(x[generateRandom(x.length)])
    //     }
    //   )).subscribe()
    this._generateNumberSubject.next();
  }

}

function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}

