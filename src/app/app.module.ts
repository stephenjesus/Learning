import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { AceEditorModule } from 'ng2-ace-editor';
import { RollbarModule, RollbarService } from 'angular-rollbar';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import { LaddaModule } from 'angular2-ladda';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {WebcamModule} from 'ngx-webcam';
import { SimpleTimer } from 'ng2-simple-timer';
import { DndModule } from 'ngx-drag-drop';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
  TreeModule,
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

import { ChartModule } from 'primeng/components/chart/chart';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Routing } from './routes';
import { SharedModule } from './Shared/shared-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainnavigationbarComponent } from './mainnavigationbar/mainnavigationbar.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { SampleResumeComponent } from './sample-resume/sample-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavigationbarComponent,
    AptitudeComponent,
    SampleResumeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    Routing,
    WebcamModule,
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
    AceEditorModule,
    ConfirmDialogModule,
    SliderModule,
    LaddaModule,
    ProgressSpinnerModule,
    LightboxModule,
    StepsModule,
    InplaceModule,
    PdfViewerModule,
    GalleriaModule,
    ChartModule,
    TieredMenuModule,
    NgCircleProgressModule.forRoot({
      backgroundStrokeWidth: 0,
      radius: 60,
      space: -22,
      outerStrokeWidth: 10,
      outerStrokeColor: '#20A090',
      outerStrokeLinecap: 'square',
      innerStrokeColor: '#DFDFDF',
      innerStrokeWidth: 10,
      animationDuration: 300,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      showSubtitle: false,
    }),
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
