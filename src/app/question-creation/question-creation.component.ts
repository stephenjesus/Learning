import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../Shared/services/aptitude.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-question-creation',
  templateUrl: './question-creation.component.html',
  styleUrls: ['./question-creation.component.css']
})
export class QuestionCreationComponent implements OnInit {
  SubjectList = [];
  subjecttype;
  qdata;
  answer;
  option1;
  option2;
  option3;
  option4;
  explanation;
  validationError = [];

  constructor(public QuestionService: QuestionService) { }

  ngOnInit() {
    this.SubjectList.push(
      {
      label: 'Numbers' ,
      value: 'number' ,
    } , {
      label: 'LCM and HCF' ,
      value: 'lcm' ,
    } ,  {
      label: 'Time & Distance' ,
      value: 'time_and_speed' ,
    } ,  {
      label: 'Time & Work' ,
      value: 'time_and_work' ,
    },  {
      label: 'Percentages' ,
      value: 'percentages' ,
    },  {
      label: 'Numbers' ,
      value: 'number' ,
    },  {
      label: 'Profit and Loss' ,
      value: 'profitloss' ,
    },  {
      label: 'Age' ,
      value: 'age' ,
    },  {
      label: 'Boats and Streams' ,
      value: 'boatstream' ,
    } ,  {
      label: 'Simple Interest Compound' ,
      value: 'SI' ,
    },  {
      label: 'Interest Pipes and Cisterns Trains' ,
      value: 'pipe' ,
    },  {
      label: 'C Aptitude' ,
      value: 'C' ,
    });
  }
  CreateMCQ() {

    if (this.subjecttype && this.qdata && this.answer && this.explanation &&
      this.option1 && this.option2 && this.option3 && this.option4) {
        const payload: any = {};
        const options = [];
        options.push(this.option1 , this.option2 , this.option3 , this.option4);
        payload.options = options;
        payload.q_data = this.qdata;
        payload.answer_explantion = this.explanation;
        payload.answer = this.answer;
        payload.q_id = uuid.v4();
        payload.order = 1;
        this.QuestionService.Createmcq(payload).subscribe( (done) => {
          console.log(done.json());
        });
    } else {
      this.validationError = [];
      this.validationError.push({
        severity: 'error',
        summary: 'Validation failed',
        detail: 'Enter all requried fields'
      });
    }
  }
}
