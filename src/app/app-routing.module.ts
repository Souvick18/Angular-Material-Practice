import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// component
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
const routes: Routes = [
  { path: '', redirectTo: '/Autocomplete', pathMatch: 'full' },

  // { path: 'Login',     component: LoginComponent },
  { path: 'Autocomplete',     component: AutocompleteComponent },
  { path: 'Badge',            component: BadgeComponent},
  { path: 'Bottomsheet',      component: BottomsheetComponent},
];

@NgModule({
  imports:      [ RouterModule.forRoot(routes),
                  MaterialModule,
                  FormsModule, ReactiveFormsModule,
                  BrowserModule],
  declarations: [
                  AutocompleteComponent,
                  BadgeComponent,
                  BottomsheetComponent,
                ],
  exports:      [RouterModule,
                MaterialModule,
                AutocompleteComponent,
                BadgeComponent,
                BottomsheetComponent]
})
export class AppRoutingModule { }
