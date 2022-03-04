import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemePreviewComponent } from './theme-preview/theme-preview.component';
import { ThemeBuilderComponent } from './theme-builder/theme-builder.component';

const routes: Routes = [
  { path: '', component: ThemeBuilderComponent },
  { path: 'preview', component: ThemePreviewComponent }, // { path: 'preview', pathMatch: 'full', component: ThemePreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
