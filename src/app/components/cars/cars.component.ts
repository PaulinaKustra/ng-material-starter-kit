import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, of, startWith} from 'rxjs';
import {map} from 'rxjs/operators';
import {SecurityFeatureModel} from '../../models/security-feature.model';
import {ComfortFeatureModel} from '../../models/comfort-feature.model';
import {CarBrandModel} from '../../models/car-brand.model';
import {CarService} from '../../services/car.service';
import {CarBrandService} from '../../services/car-brand.service';
import {SecurityFeaturesService} from '../../services/security-features.service';
import {ComfortFeaturesService} from '../../services/comfort-features.service';

@Component({
  selector: 'app-cars',
  styleUrls: ['./cars.component.scss'],
  templateUrl: './cars.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {

  readonly filterCriteria: FormGroup = new FormGroup({
    brand: new FormControl(),
    securityFeatures: new FormControl(),
    comfortFeatures: new FormControl()
  });

  readonly cars$ : Observable<{ brand: string, securityFeatures: string, comfortFeatures: string, model: string, id: string }[]> = combineLatest([
    this._carService.getAll(),
    this._carBrandService.getAll(),
    this._securityFeaturesService.getAll(),
    this._comfortFeaturesService.getAll(),
    this.filterCriteria.valueChanges.pipe(startWith({brand : undefined, securityFeatures: undefined, comfortFeatures : undefined}))]).pipe(
    map(([cars, brands, securityFeatures, comfortFeatures, filterCriteria]) => {
      if (!filterCriteria) {
        return [];
      }
      return cars.map(car => {
        return {
          brand: brands.find(brand => brand.id === car.brandId)?.name ?? "",
          securityFeatures: car.securityFeatureIds.map(id => securityFeatures.find(feature => feature.id === id)?.name ?? "").join(', '),
          comfortFeatures: car.comfortFeatureIds.map(id => comfortFeatures.find(feature => feature.id === id)?.name ?? "").join(', '),
          model:car.model,
          id: car.id
        }
      }).filter(car =>
        (filterCriteria.brand ? car.brand.toLowerCase().includes(filterCriteria.brand.toLowerCase()) : true)
        && (filterCriteria.securityFeatures ? car.securityFeatures.toLowerCase().includes(filterCriteria.securityFeatures.toLowerCase())  : true)
        && (filterCriteria.comfortFeatures ? car.comfortFeatures.toLowerCase().includes(filterCriteria.comfortFeatures.toLowerCase())  : true))
    })
  );

  readonly brands$: Observable<CarBrandModel[]> = combineLatest([
    this._carBrandService.getAll(),
    this.filterCriteria.get("brand")?.valueChanges ?? of(undefined)]).pipe(
    map(([brands, filter]) => {
      if (!filter) {
        return brands;
      }
      return brands.filter((brand) =>
        brand.name.toLowerCase().includes(filter.toLowerCase()));
    })
  );

  readonly securityFeatures$: Observable<SecurityFeatureModel[]> = combineLatest([
    this._securityFeaturesService.getAll(),
    this.filterCriteria.get("securityFeatures")?.valueChanges ?? of(undefined)]).pipe(
    map(([securityFeatures, filter]) => {
      if (!filter) {
        return securityFeatures;
      }
      return securityFeatures.filter((securityFeature) =>
        securityFeature.name.toLowerCase().includes(filter.toLowerCase()));
    })
  );

  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = combineLatest([
    this._comfortFeaturesService.getAll(),
    this.filterCriteria.get("comfortFeatures")?.valueChanges ?? of(undefined)]).pipe(
    map(([comfortFeatures, filter]) => {
      if (!filter) {
        return comfortFeatures;
      }
      return comfortFeatures.filter((comfortFeature) =>
        comfortFeature.name.toLowerCase().includes(filter.toLowerCase()));
    })
  );

  constructor(
    private _carService: CarService,
    private _carBrandService: CarBrandService,
    private _securityFeaturesService: SecurityFeaturesService,
    private _comfortFeaturesService: ComfortFeaturesService) {
  }
}
