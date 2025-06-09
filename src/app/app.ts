import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { countState } from './signal-state/signal-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [countState],
})
export class App {
  readonly countState = inject(countState);
  protected title = 'signal-store-example';
}
