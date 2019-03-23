import { Component, OnInit } from '@angular/core';


import { BreadcrumbModule, MenuItem, TabViewModule,
   TooltipModule, Paginator, DataTable, FileUpload } from 'primeng/primeng';



@Component({
  selector: 'app-mainnavigationbar',
  templateUrl: './mainnavigationbar.component.html',
  styleUrls: ['./mainnavigationbar.component.css']
})
export class MainnavigationbarComponent implements OnInit {
  breadcrmbItems: MenuItem[];
  homelink: any = {};
  constructor() {
    this.breadcrmbItems = [];
    this.breadcrmbItems.push({ label : 'test' });
    this.homelink.routerLink = '/test';
   }

  ngOnInit() {
  }

}
