import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {
  collection = [];
  currentQ;
  p: number = 1;
  toggle = false;
  constructor() {
    const json = {
      q_data : 'A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?',
      answer : '7.2' ,
      explanation :  'Speed =		600	m/sec. 5 x 60 = 2 m/sec.' ,
      options: [
        3.6,
        7.2,
        8.4,
        10
      ]
    };
    for (let i = 1; i <= 100; i++) {
      this.collection.push(json);
    }
   }
   viewanswer(item) {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.currentQ = item;
    } else {
      this.currentQ = [];
    }

   }
  //  pageChanged(event) {
  //    console.log('pageChanged');
  //   }

  ngOnInit() {
  }

}
