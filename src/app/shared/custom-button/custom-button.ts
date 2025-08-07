import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
})
export class CustomButton {
  @Input() text!: string;
  @Input() type: string = 'button';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
