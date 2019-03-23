import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleResumeComponent } from './sample-resume.component';

describe('SampleResumeComponent', () => {
  let component: SampleResumeComponent;
  let fixture: ComponentFixture<SampleResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
