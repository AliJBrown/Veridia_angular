import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkDetailComponent } from './landmark-detail.component';

describe('LandmarkDetailComponent', () => {
  let component: LandmarkDetailComponent;
  let fixture: ComponentFixture<LandmarkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
