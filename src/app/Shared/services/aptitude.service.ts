import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';



@Injectable()
export class QuestionService {
    api_url: any = `https://placementking.herokuapp.com/`;

    constructor(private http: Http, private router: Router) {}

    public resulttoAptitudequestion = new BehaviorSubject<any>(null);

    GetAllaptitudeQuestions(query) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('type', query);
        const options: any = {};
        options.search = params;
        return this.http.get(this.api_url + '/getquestions?' + params);
    }

    Createmcq(payload) {
        return this.http.post(this.api_url + 'questions/create', payload);
    }

    createProduct(payload) {
        return this.http.post(this.api_url + 'questions/product', payload);
    }

    getquestions(type) {
        return this.http.get(this.api_url + `questions/read?type=${type}`);
    }

    updateProduct(payload) {
        return this.http.post(this.api_url + 'questions/product/update', payload);
    }

    updateDb(id , payload) {
        return this.http.put(`http://api.jsoneditoronline.org/v1/docs/${id}`, payload);
    }
    
}
