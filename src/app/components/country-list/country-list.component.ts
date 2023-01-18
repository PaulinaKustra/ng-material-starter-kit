import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { CountryListModel } from '../../models/country-list.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-list',
  styleUrls: ['./country-list.component.scss'],
  templateUrl: './country-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent {
  _deleteCountriesSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  readonly countries$: Observable<CountryListModel[]> = this._deleteCountriesSubject.asObservable().pipe(switchMap(() => this._countriesService.getAll()));


  onDeleteButtonClicked(country: CountryListModel){
    this._countriesService.delete(country.id).subscribe(() => this._deleteCountriesSubject.next());
  }

  constructor(private _countriesService: CountriesService) {
  }
}
