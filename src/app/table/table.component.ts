import { Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
export interface PeriodicElement {
  custref: string;
  mid: number;
  merchant_name:string;
  currency:string;
  valid_from:string;
  valid_to:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {custref: 'PO1674783569 ', mid: 11090654, merchant_name: 'ABC', currency: 'GBP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO1774783569 ', mid: 90090654, merchant_name: 'DEF', currency: 'GSP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO1874783569 ', mid: 80090654, merchant_name: 'GHI', currency: 'KBP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO1974783569 ', mid: 70090654, merchant_name: 'JKL', currency: 'TBP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2074783569 ', mid: 60090654, merchant_name: 'MNO', currency: 'HBP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2174783569 ', mid: 50090654, merchant_name: 'PQR', currency: 'GBL',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2274783569 ', mid: 10090654, merchant_name: 'STU', currency: 'MTP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2374783569 ', mid: 20090654, merchant_name: 'VWX', currency: 'STP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2474783569 ', mid: 30090654, merchant_name: 'YZA', currency: 'FTP',valid_from:'2017',valid_to:'2020'},
  {custref: 'PO2574783569 ', mid: 40090654, merchant_name: 'BCD', currency: 'JBL',valid_from:'2017',valid_to:'2020'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['custref', 'mid', 'lcp', 'merchant_name','interchange_country','card_name','processing_agent','acpt_commercial_card','refund','currency','valid_from','valid_to'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
