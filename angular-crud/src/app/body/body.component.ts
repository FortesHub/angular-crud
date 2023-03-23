import { MatDialog } from '@angular/material/dialog';
import { MessageService } from './../services/message.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ToolbarComponent } from '../Toolbar/Toolbar.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'personName',
    'domaine',
    'level',
    'salaire',
    'comment',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons() {
    this.api.getPerson().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.messageService.error('Error while fetching the person');
      },
    });
  }

  editPerson(row : any){
this.dialog.open(ToolbarComponent,{
  width: '30%',
  data:row
})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
