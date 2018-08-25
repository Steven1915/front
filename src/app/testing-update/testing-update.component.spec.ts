import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingUpdateComponent } from './testing-update.component';

describe('TestingUpdateComponent', () => {
  let component: TestingUpdateComponent;
  let fixture: ComponentFixture<TestingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
