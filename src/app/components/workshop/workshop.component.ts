import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cs-workshop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {}
