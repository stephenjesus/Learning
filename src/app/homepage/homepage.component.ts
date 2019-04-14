import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import * as Plyr from 'plyr';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public player;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  hideContext(event) {
    return false;
  }
}
