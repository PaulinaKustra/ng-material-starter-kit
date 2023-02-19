import {ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
  switchMap
} from 'rxjs';
import {UniversityModel} from '../../models/university.model';
import {UniversityService} from '../../services/university.service';

@Component({
  selector: 'app-universities',
  styleUrls: ['./universities.component.scss'],
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent {
  private _countrySubject: Subject<string> = new Subject<string>();
  readonly universitiesByCountry$: Observable<UniversityModel[]> =
    this._countrySubject.asObservable().pipe(
      switchMap((country) =>
        this._universityService.getAllByCountry(country)));


  @ViewChild('input') input: ElementRef | undefined;
  subscription: Subscription | undefined;

  ngAfterViewInit() {
    if (this.input) {
      this.subscription = fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(1000),
          distinctUntilChanged(),
          tap((text) => {
            if (this.input) {
              this._countrySubject.next(this.input.nativeElement.value)
            }
          })
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor(
    private _universityService: UniversityService) {
  }
}

