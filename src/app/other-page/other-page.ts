import { Component, inject } from '@angular/core';
import { countState } from '../signal-state/signal-state';

@Component({
  selector: 'app-other-page',
  imports: [],
  templateUrl: './other-page.html',
  styleUrl: './other-page.scss',
})
export class OtherPage {
  readonly countState = inject(countState);
}
