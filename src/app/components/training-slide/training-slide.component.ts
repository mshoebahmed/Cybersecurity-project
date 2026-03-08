import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from '../../services/training.service';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'cs-training-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-slide.component.html',
  styleUrls: ['./training-slide.component.css']
})
export class TrainingSlideComponent implements OnChanges {
  @Input() training!: Training;
  visible = true;

  constructor(public svc: TrainingService) {}

  ngOnChanges(): void {
    this.visible = false;
    setTimeout(() => this.visible = true, 20);
  }

  getImg(key: string): string {
    return this.svc.getImage(key);
  }
}
