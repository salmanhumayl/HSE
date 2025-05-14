import { Component, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-date-control',
  templateUrl: './custom-date-control.component.html',
  styleUrls: ['./custom-date-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDateControlComponent),
      multi: true
    }
  ]
})
export class CustomDateControlComponent implements ControlValueAccessor {
  value: string = '';
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
        const formatted = this.toDisplayFormat( this.value); // convert to yyyy-mm-dd
    this.onChange(formatted);
    
    this.onTouched();
  }

     toDisplayFormat(value: string): string {
    // Converts yyyy-mm-dd to dd/mm/yyyy
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }
}