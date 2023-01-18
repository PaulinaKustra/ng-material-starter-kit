import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-random-names',
  styleUrls: ['./random-names.component.scss'],
  templateUrl: './random-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomNamesComponent {
  names$: Observable<string[]> = of(["John", "Mary", "Anna", "Ted", "Charles", "Elizabeth", "Philip", "William"])
  _refreshNamesSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  data$: Observable<string[]> = this._refreshNamesSubject.asObservable().pipe(switchMap(() => this.getRandomNames()))

  getRandomNames(): Observable<string[]> {
    return this.names$.pipe(map(x => this.shufflingArray(x)))
  }

  generateList() {
    this._refreshNamesSubject.next();
  }

  shufflingArray(value: any[]) {
    let items: any[] = [];
    for (let i = 0; i < value.length; i++) {
      items.push(value[i]);
    }
    // reversing items array
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
}
