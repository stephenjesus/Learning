import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavigationbarComponent } from './mainnavigationbar.component';

describe('MainnavigationbarComponent', () => {
  let component: MainnavigationbarComponent;
  let fixture: ComponentFixture<MainnavigationbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnavigationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
