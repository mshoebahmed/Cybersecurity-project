import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cs-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Output() entered = new EventEmitter<void>();

  isAnimating = false;
  doorOpen = false;

  enter(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.doorOpen = true;
    setTimeout(() => this.entered.emit(), 900);
  }
}
