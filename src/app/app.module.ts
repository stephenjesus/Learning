import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';


import {SidebarModule} from 'primeng/components/sidebar/sidebar';



import { QuestionService } from '../app/Shared/services/aptitude.service';


/* Import prism core */
import 'prismjs/prism';


/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

// import { MathJaxDirective } from './Shared/mathjax.directive';
// primeNG


import {
  InplaceModule,
  AccordionModule,
  FieldsetModule,
  MenuItem,
  ButtonModule,
  DialogModule,
  InputTextModule,
  ChipsModule,
  InputTextareaModule,
  SplitButtonModule,
  BreadcrumbModule,
  DropdownModule,
  GrowlModule,
  DataTableModule,
  InputSwitchModule,
  DataListModule,
  BlockUIModule,
  ToggleButtonModule,
  EditorModule,
  FileUploadModule,
  CheckboxModule,
  RadioButtonModule,
  ContextMenuModule,
  OverlayPanelModule,
  TooltipModule,
  CalendarModule,
  PaginatorModule,
  DragDropModule,
  MultiSelectModule,
  ConfirmDialogModule,
  ProgressBarModule,
  TabViewModule,
  SliderModule,
  ProgressSpinnerModule,
  StepsModule,
  LightboxModule,
  GalleriaModule,
  TieredMenuModule
} from 'primeng/primeng';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { Routing } from './routes';
import { SharedModule } from './Shared/shared-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainnavigationbarComponent } from './mainnavigationbar/mainnavigationbar.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { SampleResumeComponent } from './sample-resume/sample-resume.component';
import { QuestionCreationComponent } from './question-creation/question-creation.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavigationbarComponent,
    AptitudeComponent,
    SampleResumeComponent,
    QuestionCreationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ChipsModule,
    InputTextareaModule,
    SplitButtonModule,
    BreadcrumbModule,
    DataTableModule,
    SidebarModule,
    SharedModule,
    DropdownModule,
    CalendarModule,
    GrowlModule,
    ToggleButtonModule,
    InputSwitchModule,
    OverlayPanelModule,
    CheckboxModule,
    DataListModule,
    BlockUIModule,
    EditorModule,
    FileUploadModule,
    CheckboxModule,
    RadioButtonModule,
    ContextMenuModule,
    OverlayPanelModule,
    TooltipModule,
    PaginatorModule,
    MultiSelectModule,
    TabViewModule,
    DragDropModule,
    ProgressBarModule,
    FieldsetModule,
    ConfirmDialogModule,
    SliderModule,
    ProgressSpinnerModule,
    LightboxModule,
    StepsModule,
    InplaceModule,
    GalleriaModule,
    TieredMenuModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
