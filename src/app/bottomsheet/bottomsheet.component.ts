import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})

export class BottomsheetComponent implements OnInit {
  title = 'materialstudy- Bottomsheet';


  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit() {}

  openBottomSheet(): void {
    // tslint:disable-next-line: no-use-before-declare
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }


}


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})
// tslint:disable-next-line: component-class-suffix
export class BottomSheetOverviewExampleSheet {
  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
