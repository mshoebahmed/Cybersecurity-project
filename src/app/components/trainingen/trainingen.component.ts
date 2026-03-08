import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TrainingService, Training } from '../../services/training.service';
import { TrainingSlideComponent } from '../training-slide/training-slide.component';

@Component({
  selector: 'cs-trainingen',
  standalone: true,
  imports: [CommonModule, RouterLink, TrainingSlideComponent],
  templateUrl: './trainingen.component.html',
  styleUrls: ['./trainingen.component.css']
})
export class TrainingenComponent {
  trainingen: Training[];
  current = 0;

  constructor(svc: TrainingService) {
    this.trainingen = svc.trainingen;
  }

  get training(): Training { return this.trainingen[this.current]; }
  get progress(): number  { return ((this.current + 1) / this.trainingen.length) * 100; }
  get isFirst(): boolean  { return this.current === 0; }
  get isLast(): boolean   { return this.current === this.trainingen.length - 1; }

  prev(): void { if (!this.isFirst) this.current--; }
  next(): void { if (!this.isLast) this.current++; }
  goTo(i: number): void  { this.current = i; }
}
