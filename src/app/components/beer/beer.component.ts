import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beer',
  styleUrls: ['./beer.component.scss'],
  templateUrl: './beer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent {
  private _beerSubject: BehaviorSubject<[number,number]> =
    new BehaviorSubject<[number,number]>([1, 5]);

  readonly beers$: Observable<BeerModel[]> =
    this._beerSubject.asObservable().pipe(
      switchMap((data) =>
        this._beerService.getAll(data[0],data[1])));

  handlePageEvent(e: PageEvent) {
    this._beerSubject.next([e.pageIndex + 1, e.pageSize])
  }

  constructor(private _beerService: BeerService) {
  }
}
