import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CustomPreloading } from './Shared/CustomPreloading';

import { MainnavigationbarComponent } from './mainnavigationbar/mainnavigationbar.component';



const EXAMLY_ROUTES: Routes = [
    {
        path: 'mainnavigation',
        component: MainnavigationbarComponent,
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(EXAMLY_ROUTES, {preloadingStrategy: CustomPreloading})
    ],
    exports: [
      RouterModule
    ],
    providers: [CustomPreloading]
})

export class Routing {}
