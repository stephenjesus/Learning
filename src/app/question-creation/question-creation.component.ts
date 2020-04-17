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
  subTypeList = [];
  questionList = [];
  subjecttype;
  qdata;
  answer;
  option1;
  option2;
  option3;
  option4;
  explanation;
  validationError = [];
  subType = '';
  type = '';
  year = 2019;
  yearList = [];
  qIndex;
  blocked = false;

  constructor(public QuestionService: QuestionService) { }

  ngOnInit() {
    this.subTypeList = [
      {
        label: 'Infosys',
        value: 'infosys',
      }, {
        label: 'Wipro',
        value: 'wipro',
      }
      , {
        label: 'TCC',
        value: 'tcs',
      }
      , {
        label: 'Accenture',
        value: 'accenture',
      }
      , {
        label: 'Capgemini',
        value: 'capgemini',
      }
      , {
        label: 'CTS',
        value: 'cts',
      }
    ]
    this.yearList.push(
      {
        label: '2019',
        value: 2019,
      },
      {
        label: '2018',
        value: 2018 ,
      },
      {
        label: '2017',
        value:  2017,
      },
      {
        label: '2016',
        value:  2016,
      },
    );
    this.SubjectList.push(
      {
        label: 'Quants',
        value: 'quants',
      },
      {
        label: 'Verbal' ,
        value: 'verbal' ,
      },
      {
        label: 'Logical' ,
        value: 'logical' ,
      },
    );
  }
  CreateMCQ() {
    if (this.subType && this.qdata && this.answer && this.explanation &&
      this.option1 && this.option2 && this.option3 && this.option4 && this.type) {
        this.blocked = true;
        const payload: any = {};
        payload.option1 = this.option1;
        payload.option2 = this.option2;
        payload.option3 = this.option3;
        payload.option4 = this.option4;
        payload.question_data = this.qdata;
        payload.video_link = "";
        payload.answer_explanation = this.explanation;
        payload.answer = this.answer;
        payload.type = this.type;
        payload.subtype = this.subType;
        payload.company_type = 'service';
        payload.year = this.year;
        this.QuestionService.Createmcq(payload).subscribe( (done) => {
          this.option1 = null;
          this.option2 = null;
          this.option3 = null;
          this.option4 = null;
          this.qdata = null;
          this.explanation = null;
          payload.video_link = "";
          this.answer = null;
          this.validationError = [];
          this.validationError.push({
            severity: 'success',
            summary: 'Question Created',
            detail: 'Successfully'
          });
          this.blocked = false;
        });
    } else {
      this.blocked = false;
      this.validationError = [];
      this.validationError.push({
        severity: 'error',
        summary: 'Validation failed',
        detail: 'Enter all requried fields'
      });
    }
  }


  getQuestion() {
    this.QuestionService.getquestions(this.type).subscribe((res: any) => { 
      res = res.json();
      this.questionList = res.arr;
    }); 
  }
  changeQuestionIndex() { 
    this.option1 = this.questionList[this.qIndex].option1;
    this.option2 = this.questionList[this.qIndex].option2;
    this.option3 = this.questionList[this.qIndex].option3;
    this.option4 = this.questionList[this.qIndex].option4;
    this.qdata = this.questionList[this.qIndex].question_data;
    this.explanation = this.questionList[this.qIndex].answer_explanation;
    this.answer = this.questionList[this.qIndex].answer;
  }
}
