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
  showaptitude = false;
  blocked = false;
  constructor() {
    this.breadcrmbItems = [];
    this.breadcrmbItems.push({ label : 'test' });
    this.homelink.routerLink = '/test';
   }

  ngOnInit() {
  }
  Hidefunction() {
    this.showaptitude = false;
  }

  Showtopics(type , subtype) {
    console.log( type  , subtype);
    switch (type) {
      case 'Aptitude': {
        this.Hidefunction();
        this.blocked = true;
        setTimeout(() => {
          this.blocked = false;
          this.showaptitude = true;
        }, 3000);
        break;
      }
      case 'Programming': {
        this.Hidefunction();
        break;
      }
      case 'Interview': {
        this.Hidefunction();
        break;
      }
      case 'Service': {
        this.Hidefunction();
        break;
      }
      case 'Product': {
        this.Hidefunction();
        break;
      }

    }
  }

}
