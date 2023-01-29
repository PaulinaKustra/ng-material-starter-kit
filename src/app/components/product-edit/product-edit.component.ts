import {ChangeDetectionStrategy, Component, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {switchMap, take, tap} from 'rxjs/operators';
import {ProductDetailsModel} from '../../models/product-details.model';
import {ProductDetailsService} from '../../services/product-details.service';
import {UploadClient} from "@uploadcare/upload-client";

@Component({
  selector: 'app-product-edit',
  styleUrls: ['./product-edit.component.scss'],
  templateUrl: './product-edit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductEditComponent {
  readonly products$: Observable<ProductDetailsModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._productDetailsService.getOne(data['id'])),
      take(1)
      , tap((data) => this.form.patchValue(data))
    );

  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    image: new FormControl(''),
    avatar: new FormControl(),
  });
  readonly categories$: Observable<string[]> = this._productDetailsService.getAll();

  constructor(private _productDetailsService: ProductDetailsService, private _activatedRoute: ActivatedRoute) {
    this.products$.subscribe();
  }

  public imageURL: Observable<any> = of('test');

  public onFileSelected(event: any) {
    console.log('onselect');

    this.showPreview(event)
  }

  showPreview(event: any) {
    if (event && event.target && event.target.files[0]) {
      // @ts-ignore
      const file = (event.target as HTMLInputElement).files[0];

      console.log('wczytano zdjęcie ', file);

      from(this.client.uploadFile(file)
      ).subscribe((result) => {
        console.log('dane:', result)
        this.imageURL = of(result.cdnUrl);
        this.form.patchValue({image: result.cdnUrl})
        console.log('this.imageUrl:', this.imageURL)
      })
    }
  }

  client = new UploadClient({publicKey: 'b66cb5aa61ed990132b2'})

  onFormSubmitted(form: FormGroup): void {
    console.log('leci submit', form.value.image)
    this._activatedRoute.params
      .pipe(
        take(1),
        switchMap((data) =>
          this._productDetailsService.update
          ({
            id: data['id'],
            ...form.value
          }))
      ).subscribe();

  }

  @ViewChild('fileUploader') fileUploader!: ElementRef;

  onRemoveButtonClicked() {
    this.fileUploader.nativeElement.value = null;
    this.imageURL = of('')
  }

}
