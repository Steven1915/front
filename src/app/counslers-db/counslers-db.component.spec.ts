import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounslersDBComponent } from './counslers-db.component';

describe('CounslersDBComponent', () => {
  let component: CounslersDBComponent;
  let fixture: ComponentFixture<CounslersDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounslersDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounslersDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
