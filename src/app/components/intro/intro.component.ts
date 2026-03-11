import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cs-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {
  @Output() entered = new EventEmitter<void>();

  progress = 0;
  private done = false;

  // The scroll container is 1x the viewport height
  private readonly SCROLL_PAGES = 1.5;
  private scrollEl!: HTMLDivElement;

  // ── Computed visual properties ──────────────────────────────────

  /** Scroll hint fades out between 0 → 15% scroll */
  get hintOpacity(): number {
    return Math.max(0, 1 - this.norm(this.progress, 0, 0.15));
  }

  /** Logo scales down and fades between 45% → 68% scroll */
  get logoScale(): number {
    return 1 - 0.65 * this.norm(this.progress, 0.45, 0.68);
  }
  get logoOpacity(): number {
    return 1 - this.norm(this.progress, 0.45, 0.68);
  }

  /** Doors slide open between 64% → 100% scroll */
  get doorPercent(): number {
    return 100 * this.norm(this.progress, 0.64, 1.0);
  }

  // ── Lifecycle ───────────────────────────────────────────────────

  ngOnInit(): void {
    // Create an invisible scroll container that captures wheel/touch events
    this.scrollEl = document.createElement('div');
    this.scrollEl.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 1001;
      overflow-y: scroll;
      pointer-events: auto;
    `;

    // Tall spacer so there is room to scroll
    const spacer = document.createElement('div');
    spacer.style.height = `${window.innerHeight * this.SCROLL_PAGES}px`;
    this.scrollEl.appendChild(spacer);
    document.body.appendChild(this.scrollEl);

    this.scrollEl.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    this.scrollEl?.remove();
  }

  // ── Private helpers ─────────────────────────────────────────────

  private onScroll = (): void => {
    const maxScroll = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
    this.progress = maxScroll > 0 ? this.scrollEl.scrollTop / maxScroll : 0;

    if (this.progress >= 0.99 && !this.done) {
      this.done = true;
      this.scrollEl.remove();
      // Small delay lets the doors finish animating
      setTimeout(() => this.entered.emit(), 100);
    }
  };

  /** Normalise value into 0–1 between rangeMin and rangeMax */
  private norm(value: number, min: number, max: number): number {
    return Math.min(1, Math.max(0, (value - min) / (max - min)));
  }
}
