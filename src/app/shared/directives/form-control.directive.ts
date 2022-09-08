import { Directive, ElementRef, HostListener } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { exists } from "@signify/photon";

@Directive({
  selector: "[appFormControl]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormControlDirective,
      multi: true,
    },
  ],
})
export class FormControlDirective implements ControlValueAccessor {
  private valueGetter: any = null;

  constructor(private readonly el: ElementRef) {}

  public get value() {
    return this.valueGetter;
  }

  public set value(value: any) {
    if (value !== this.value && !(!exists(value) && !exists(this.value))) {
      this.valueGetter = value;
      this.onChange(value);

      const el = this.el.nativeElement;

      if (this.isBoolean(el)) {
        el.checked = value;
      } else {
        el.value = value;
      }
    }
  }

  @HostListener("input", ["$event.target"])
  public handleChange(target: HTMLInputElement) {
    this.value = this.isBoolean(target) ? target.checked : target.value;
    this.onTouched();
  }

  public onChange: (_: any) => void = () => {
    /**/
  };

  public onTouched: () => void = () => {
    /**/
  };

  public registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }

  public writeValue(value: any) {
    this.value = value;
  }

  private isBoolean(el: HTMLElement) {
    return el.tagName.toLocaleLowerCase() === "pho-checkbox";
  }
}
