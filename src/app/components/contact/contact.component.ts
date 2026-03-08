import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cs-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  };

  submit(): void {
    this.submitted = true;
  }
}
