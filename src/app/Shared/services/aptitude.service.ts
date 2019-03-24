import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';



@Injectable()
export class QuestionService {
    api_url = environment.HOST.link;

    constructor(private http: Http, private router: Router) {}

    public resulttoAptitudequestion = new BehaviorSubject<any>(null);
    GetAllaptitudeQuestions(query) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('type', query);
        const options: any = {};
        options.search = params;
        return this.http.get(this.api_url + '/getquestions?' + params);
    }

    getAllSchoolList(payload) {
        return this.http.post(this.api_url + '/schools', payload);
    }
}

// /getquestions?type=time_and_speed