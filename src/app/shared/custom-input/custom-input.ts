import {
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInput),
      multi: true,
    },
  ],
  standalone: true, // якщо ви використовуєте standalone компоненти
})
export class CustomInput implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
