import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDBComponent } from './students-db.component';

describe('StudentsDBComponent', () => {
  let component: StudentsDBComponent;
  let fixture: ComponentFixture<StudentsDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
