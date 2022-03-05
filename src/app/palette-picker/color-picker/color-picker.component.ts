import { Component, OnInit, Input } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  backdrop = false;

  @Input()
  control: FormControl;

  @Input()
  disabled: boolean;

  @Input()
  presets?: string[];

  constructor() { }

  set color(col: string) {
    this.control.setValue(col);
  }

  get color() {
    return this.control.value;
  }

  ngOnInit() {
    this.presets = ['red', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)'] 
  }

  setBackdrop(on: boolean) {
    this.backdrop = on;
  }

  getTextColor(col: string) {
    return tinycolor(col).isLight() ? '#000' : '#fff';
  }
}
