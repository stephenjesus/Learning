import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public player;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  hideContext(event) {
    return false;
  }
}
