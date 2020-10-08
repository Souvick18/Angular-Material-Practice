import { NgModule } from '@angular/core';
// for Autocomplete Mat Using
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// for Material Badge Using
import { MatBadgeModule} from '@angular/material/badge';
// for Bottomsheet
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// Common Module Using
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
const ArrayName = [ MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatSidenavModule];
@NgModule({
imports: [ArrayName],
exports: [ArrayName]
})

export class MaterialModule {}
