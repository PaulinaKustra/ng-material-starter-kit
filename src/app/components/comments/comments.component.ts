import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  styleUrls: ['./comments.component.scss'],
  templateUrl: './comments.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
  readonly commentsForm: FormGroup = new FormGroup({
    comment: new FormControl('', [Validators.pattern('^\\s*\\S+(?:\\s+\\S+){4,}\\s*$')])
  });

  onCommentsFormSubmitted(commentsForm: FormGroup): void {
  }
}
