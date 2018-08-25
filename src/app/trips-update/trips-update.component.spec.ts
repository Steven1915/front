import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsUpdateComponent } from './trips-update.component';

describe('TripsUpdateComponent', () => {
  let component: TripsUpdateComponent;
  let fixture: ComponentFixture<TripsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
