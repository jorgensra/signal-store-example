import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { countState } from './signal-state/signal-state';
import { OtherPage } from './other-page/other-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [countState],
  imports: [OtherPage],
})
export class App {
  readonly countState = inject(countState);
  protected title = 'signal-store-example';
}
