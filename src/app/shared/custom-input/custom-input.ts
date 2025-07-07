import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput {
  @Input() placeholder: string = '';
  @Input() label: string = '';
}
