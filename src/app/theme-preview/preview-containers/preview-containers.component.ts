import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IconNotifyComponent } from 'src/app/icon-picker/icon-notify/icon-notify.component';

export interface PeriodicElement {
  name: string;
  position: any; //position: number;
  weight: any; // weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'red', name: 'IndianRed', weight: '#CD5C5C', symbol: 'rgb(205, 92, 92)' },
  { position: 'red', name: 'LightCoral', weight: '#F08080', symbol: 'rgb(240, 128, 128)' },
  { position: 'red', name: 'Salmon', weight: '#FA8072', symbol: 'rgb(250, 128, 114)' },
  { position: 'red', name: 'DarkSalmon', weight: '#E9967A', symbol: 'rgb(233, 150, 122)' },
  { position: 'red', name: 'LightSalmon', weight: '#FFA07A', symbol: 'rgb(255, 160, 122)' },
  { position: 'red', name: 'Crimson', weight: '#DC143C', symbol: 'rgb(220, 20, 60)' },
  { position: 'red', name: 'Red', weight: '#FF0000', symbol: 'rgb(255, 0, 0)' },
  { position: 'red', name: 'FireBrick', weight: '#B22222', symbol: 'rgb(178, 34, 34)' },
  { position: 'red', name: 'DarkRed', weight: '#8B0000', symbol: 'rgb(139, 0, 0)' },
]


@Component({
  selector: 'app-preview-containers',
  templateUrl: './preview-containers.component.html',
  styleUrls: ['./preview-containers.component.scss'],
})
export class PreviewContainersComponent implements OnInit, AfterViewInit, OnDestroy {


  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dialogRef = this.dialog.open(IconNotifyComponent, {
        hasBackdrop: false,
        autoFocus: false,
        restoreFocus: false,
        disableClose: true,
        height: '500px',
        width: '500px',
        position: {
          top: '210px',
          right: '15px'
        }
      });
    }, 100);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
