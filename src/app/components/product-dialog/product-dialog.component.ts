import { ChangeDetectionStrategy, Component, ViewEncapsulation,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductDialogModel} from "../../models/product-dialog.model";
@Component({
  selector: 'app-product-dialog',
  styleUrls: ['./product-dialog.component.scss'],
  templateUrl: './product-dialog.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductDialogModel) {}
}
