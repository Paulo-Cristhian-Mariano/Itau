import { AfterViewInit, Component, Input, SimpleChange, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  @Input() public conteudoTabela: any[] = [];
  @Input() public displayedColumns: string[] = [];
  @Input() public search!: Event;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(this.conteudoTabela);

  ngOnChanges(changes: SimpleChange) {
    this.applyFilter(this.search)
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.conteudoTabela);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    if(event == undefined){return}
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}