import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLandmarkComponent } from './edit-landmark.component';

describe('EditLandmarkComponent', () => {
  let component: EditLandmarkComponent;
  let fixture: ComponentFixture<EditLandmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLandmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLandmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
