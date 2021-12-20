import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalettePickerComponent } from './palette-picker/palette-picker.component';
import { FontPickerComponent } from './font-picker/font-picker.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { ThemeBuilderComponent } from './theme-builder/theme-builder.component';
import { ThemePreviewComponent } from './theme-preview/theme-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleFontSelectorComponent } from './google-font-selector/google-font-selector.component';


import { LightnessPickerComponent } from './lightness-picker/lightness-picker.component';
import { PreviewControlsComponent } from './theme-preview/preview-controls/preview-controls.component';
import { PreviewTypographyComponent } from './theme-preview/preview-typography/preview-typography.component';
import { PreviewContainersComponent } from './theme-preview/preview-containers/preview-containers.component';
import { CreditsComponent } from './credits/credits.component';
import { IconNotifyComponent } from './icon-picker/icon-notify/icon-notify.component';
import { SubPalettePickerComponent } from './palette-picker/sub-palette-picker/sub-palette-picker.component';
import { ColorPickerComponent } from './palette-picker/color-picker/color-picker.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GoogleFontItemComponent } from './google-font-selector/google-font-item/google-font-item.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PalettePickerComponent,
    FontPickerComponent,
    IconPickerComponent,
    ThemeBuilderComponent,
    ThemePreviewComponent,
    GoogleFontSelectorComponent,
    LightnessPickerComponent,
    PreviewControlsComponent,
    PreviewTypographyComponent,
    PreviewContainersComponent,
    CreditsComponent,
    IconNotifyComponent,
    SubPalettePickerComponent,
    ColorPickerComponent,
    GoogleFontItemComponent
  ],
  imports: [
    SharedModule,
    ColorPickerModule,
    HttpClientModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
  ],
  entryComponents: [
    CreditsComponent,
    GoogleFontSelectorComponent,
    IconNotifyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
