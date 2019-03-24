import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CustomPreloading } from './Shared/CustomPreloading';

import { MainnavigationbarComponent } from './mainnavigationbar/mainnavigationbar.component';
import { QuestionCreationComponent } from './question-creation/question-creation.component';



const COMROUTES: Routes = [
    {
        path: 'mainnavigation',
        component: MainnavigationbarComponent,
    },
    {
        path: 'create',
        component: QuestionCreationComponent,
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(COMROUTES, {preloadingStrategy: CustomPreloading})
    ],
    exports: [
      RouterModule
    ],
    providers: [CustomPreloading]
})

export class Routing {}
