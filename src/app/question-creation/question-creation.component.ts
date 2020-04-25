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

  isProduct = true;
  product_id = "";


  name = null;
  description = null;
  overview = null;
  price = null;
  payment_link  = null;
  ratings = null;
  rating_count = null;
  image_link = null;
  file_size =  null;
  productList = [];

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
        label: 'TCS',
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
      , {
        label: 'Tech Mahindra',
        value: 'Tech-Mahindra',
      }
      , {
        label: 'HP',
        value: 'Hp',
      }
      , {
        label: 'DELL',
        value: 'Dell',
      }
      , {
        label: 'IBM',
        value: 'IBM',
      }
      , {
        label: 'HCL',
        value: 'HCL',
      }
      , {
        label: 'MindTree',
        value: 'Mindtree',
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


  createProduct() {
    if (this.name , this.description && this.overview && this.price && this.type &&
      this.payment_link && this.ratings && this.rating_count && this.image_link && this.file_size) {
        this.blocked = true;
        const payload: any = {};
        payload.name = this.name;
        payload.description = this.description;
        payload.overview = this.overview;
        payload.price = this.price;
        payload.type = this.type;
        payload.payment_link = this.payment_link;
        payload.ratings = this.ratings;
        payload.rating_count = this.rating_count;
        payload.image_link = this.image_link;
        payload.file_size = this.file_size;
        this.QuestionService.createProduct(payload).subscribe( (done) => {
          this.name = null;
          this.description = null;
          this.overview = null;
          this.price = null;
          this.type = null;
          this.payment_link  = null;
          this.ratings = null;
          this.rating_count = null;
          this.image_link = null;
          this.file_size =  null;
          this.validationError = [];
          this.validationError.push({
            severity: 'success',
            summary: 'Product Created',
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

  clearProduct() {
    this.name = null;
    this.product_id = null;
    this.type = null;
    this.description = null;
    this.overview = null;
    this.price = null;
    this.payment_link  = null;
    this.ratings = null;
    this.rating_count = null;
    this.image_link = null;
    this.file_size =  null;
  }
  updateProduct() {
    if (this.name , this.description && this.overview && this.price && this.type && this.product_id &&
      this.payment_link && this.ratings && this.rating_count && this.image_link && this.file_size) {
        this.blocked = true;
        const payload: any = {};
        payload.id = this.product_id;
        payload.type = this.type;
        payload.name = this.name;
        payload.description = this.description;
        payload.overview = this.overview;
        payload.price = this.price;
        payload.payment_link = this.payment_link;
        payload.ratings = this.ratings;
        payload.rating_count = this.rating_count;
        payload.image_link = this.image_link;
        payload.file_size = this.file_size;
        this.QuestionService.updateProduct(payload).subscribe( (done) => {
         let db_id = `placement_master_${this.type}`;
         const dbpayload = {
            "_id": db_id,
            "_rev": `placement_master_${this.type}`,
            "name": "PlacementMaster",
            "data": payload,
            "updated": "2015-03-14T11:39:47.394Z"
         }
         this.QuestionService.updateDb(db_id , dbpayload).subscribe((done) => {
          this.clearProduct();
          this.validationError = [];
          this.validationError.push({
            severity: 'success',
            summary: 'Product Created',
            detail: 'Successfully'
          });
          this.blocked = false;
         });
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
    this.isProduct = !this.isProduct;
  }
  getProduct() {
    if (this.isProduct && this.type) {
      this.blocked = true;
      let temptype = `${this.type}_product`
      this.QuestionService.getquestions(temptype).subscribe((res: any) => { 
        res = res.json();
        this.blocked = false;
        this.productList = res.arr;
        this.qIndex = 0;
        if (this.productList  && this.productList .length) {
          this.name = this.productList[this.qIndex].name;
          this.description = this.productList[this.qIndex].description;
          this.overview = this.productList[this.qIndex].overview;
          this.price = this.productList[this.qIndex].prize;
          this.product_id = this.productList[this.qIndex].id;
          this.payment_link = this.productList[this.qIndex].payment_link;
          this.image_link = this.productList[this.qIndex].image_link;
          this.ratings = this.productList[this.qIndex].ratings;
          this.rating_count = this.productList[this.qIndex].rating_count;
          this.file_size = this.productList[this.qIndex].file_size;
        } else {
          this.productList = [];
          this.clearProduct();
        }
      }); 
    }
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
