import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPersonComponent } from '../AddPerson/AddPerson.component';

@Component({
  selector: 'app-Toolbar',
  templateUrl: './Toolbar.component.html',
  styleUrls: ['./Toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openDialog() {
    this.dialog.open(AddPersonComponent, {
      width: '50%'
      // height: '80%'
      ,
    });
  }

}
