import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  styleUrls: ['./comments.component.scss'],
  templateUrl: './comments.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
    comment = new FormControl('', [Validators.pattern('^\\s*\\S+(?:\\s+\\S+){3,}\\s*$')]);

}
