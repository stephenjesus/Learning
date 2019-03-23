import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

// services
// import { QuestionService } from './services/question.service';


@NgModule({
    declarations: [],
    imports: [
      HttpModule,
      RouterModule
    ],
    providers: [
     // QuestionService,
    ],
    bootstrap: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
       // QuestionService
      ]
    };
  }
}
