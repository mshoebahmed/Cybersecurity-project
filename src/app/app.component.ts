import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cs-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent, NavbarComponent, CommonModule],
  template: `
    <cs-intro *ngIf="showIntro" (entered)="onEnter()"></cs-intro>
    <ng-container *ngIf="!showIntro">
      <cs-navbar></cs-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </ng-container>
  `,
  styles: [`
    main {
      padding-top: 72px;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  showIntro = true;

  onEnter(): void {
    this.showIntro = false;
  }
}
