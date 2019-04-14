import { Component, OnInit } from '@angular/core';


import { BreadcrumbModule, MenuItem, TabViewModule,
   TooltipModule, Paginator, DataTable, FileUpload } from 'primeng/primeng';


   import { QuestionService } from '../Shared/services/aptitude.service';

@Component({
  selector: 'app-mainnavigationbar',
  templateUrl: './mainnavigationbar.component.html',
  styleUrls: ['./mainnavigationbar.component.css']
})
export class MainnavigationbarComponent implements OnInit {
  breadcrmbItems: MenuItem[];
  homelink: any = {};
  showaptitude = false;
  showresume = false;
  blocked = false;
  showcreate = false;
  showhomepage = true;
  constructor(private QuestionService: QuestionService) {
    this.breadcrmbItems = [];
    this.breadcrmbItems.push({ label : 'test' });
    this.homelink.routerLink = '/test';
   }

  ngOnInit() {
  }
  Hidefunction() {
    this.showaptitude = false;
    this.showresume = false;
    this.showcreate = false;
    this.showhomepage = false;
  }

  Showtopics(type , subtype) {
    console.log( type  , subtype);
    switch (type) {
      case 'Aptitude': {
        this.Hidefunction();
        this.blocked = true;
        const query = 'time_and_speed';
        this.QuestionService.GetAllaptitudeQuestions(query).subscribe((res) => {
          const response = res.json();
          const obj: any = {};
          obj.response = response;
          obj.type = subtype;
          this.QuestionService.resulttoAptitudequestion.next(obj);
          this.blocked = false;
          this.showaptitude = true;
        });
        break;
      }
      case 'Programming': {
        this.Hidefunction();
        break;
      }
      case 'Home': {
        this.Hidefunction();
        this.showhomepage = true;
        break;
      }
      case 'Interview': {
        this.Hidefunction();
        break;
      }
      case 'Service': {
        this.Hidefunction();
        if (subtype === 'resume') {
          this.showresume = true;
        }
        break;
      }
      case 'Product': {
        this.Hidefunction();
        break;
      }
      case 'About': {
        this.Hidefunction();
        this.showcreate = true;
        break;
      }
    }
  }

}
